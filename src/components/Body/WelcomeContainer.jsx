import React, { useState, useRef } from "react";
import BurgerImage from "./BurgerImage";
import SocialMediaSites from "./SocialMediaSites";
import WelcomeText from "./WelcomeText";
import WelcomeIntro from "./WelcomeIntro";
import SpicyList from "./SpicyList";

function WelcomeContainer() {
  const [image, setImage] = useState("/assets/images/NewBurger.png");
  const [bbqBurger, setBbqBurger] = useState("/assets/images/cheesyBeacon.png");
  const [carolina, setCarolina] = useState("/assets/images/Corolina.png");
  const [friedChickenBurger, setFriedChickenBurger] = useState(
    "/assets/images/friedChickenBurger.png"
  );
  const changeMainImageRef = useRef();
  const [changeImageOnClick, setChangeImageOnClick] = useState();

  const changeImage = (imgPath) => {
    setChangeImageOnClick(imgPath);
    changeMainImageRef.current.src = imgPath;
  };

  return (
    <div className="welcomeText">
      <WelcomeText />
      <WelcomeIntro />

      <SpicyList className={"Mild"} spice={"Mild"} />
      <SpicyList className={"Spicy"} spice={"MilSpicyd"} />
      <SpicyList className={"Hot"} spice={"Hot"} />

      <div className="addToCart">
        <ul>
          <li>
            <p className="addToCartText">Add +</p>
          </li>
          <li>
            <p className="price">$12.99</p>
          </li>
          <li className="delList">
            <del>$16.99</del>
          </li>
        </ul>
      </div>
      <div className="hideBurgerFirst">
        <BurgerImage id={"hideBurgerFirst"} imageRef={changeMainImageRef} />
      </div>
      <div className="burgerTypes">
        <ul>
          <li onClick={() => changeImage(image)}>
            <img className="mainImages" src={image} name="image" alt="" />
          </li>
          <li onClick={() => changeImage(bbqBurger)}>
            <img src={bbqBurger} alt="" name="NewBurger" />
          </li>
          <li onClick={() => changeImage(carolina)}>
            <img src={carolina} alt="" name="carolina" />
          </li>
          <li onClick={() => changeImage(friedChickenBurger)}>
            <img src={friedChickenBurger} alt="" name="friedChickenBurger" />
          </li>
        </ul>
      </div>
      <SocialMediaSites />
    </div>
  );
}

export default WelcomeContainer;
