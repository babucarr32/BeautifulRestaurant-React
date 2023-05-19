import React, { useState, useRef } from "react";
import BurgerImage from "./BurgerImage";
import SocialMediaSites from "./SocialMediaSites";
import WelcomeText from "./WelcomeText";
import WelcomeIntro from "./WelcomeIntro";
import List from "./List";

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

      <ul>
        <List className={"Mild"} spice={"Mild"} />
        <List className={"Spicy"} spice={"MilSpicyd"} />
        <List className={"Hot"} spice={"Hot"} />
      </ul>
      <div className="addToCart">
        <ul>
          <List className={"addToCartText"} spice={"Add +"} />
          <List className={"price"} spice={"$12.99"} />
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
          <List
            onClickFunc={() => changeImage(image)}
            child={
              <img className="mainImages" src={image} name="image" alt="" />
            }
          />
          <List
            onClickFunc={() => changeImage(bbqBurger)}
            child={<img src={bbqBurger} alt="" name="NewBurger" />}
          />
          <List
            onClickFunc={() => changeImage(carolina)}
            child={<img src={carolina} alt="" name="carolina" />}
          />
          <List
            onClickFunc={() => changeImage(friedChickenBurger)}
            child={
              <img src={friedChickenBurger} alt="" name="friedChickenBurger" />
            }
          />
          {/* 
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
          </li> */}
        </ul>
      </div>
      <SocialMediaSites />
    </div>
  );
}

export default WelcomeContainer;
