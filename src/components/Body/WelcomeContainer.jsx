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
        <BurgerImage
          id={"hideBurgerFirst"}
          imageRef={changeMainImageRef}
          imagePath={image}
        />
      </div>
      <div className="burgerTypes">
        <ul>
          <List
            onClickFunc={() => changeImage(image)}
            child={
              <BurgerImage
                imagePath={image}
                imgClass={"mainImages"}
                imgName={"image"}
              />
            }
          />
          <List
            onClickFunc={() => changeImage(bbqBurger)}
            child={<BurgerImage imagePath={bbqBurger} imgName={"NewBurger"} />}
          />
          <List
            onClickFunc={() => changeImage(carolina)}
            child={<BurgerImage imagePath={carolina} imgName={"carolina"} />}
          />
          <List
            onClickFunc={() => changeImage(friedChickenBurger)}
            child={
              <BurgerImage
                imagePath={friedChickenBurger}
                imgName={"friedChickenBurger"}
              />
            }
          />
        </ul>
      </div>
      <SocialMediaSites />
    </div>
  );
}

export default WelcomeContainer;
