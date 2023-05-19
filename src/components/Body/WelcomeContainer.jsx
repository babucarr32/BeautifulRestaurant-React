import React, { useState, useRef, createContext } from "react";
import BurgerImage from "./BurgerImage";
import SocialMediaSites from "./SocialMediaSites";
import WelcomeText from "./WelcomeText";
import WelcomeIntro from "./WelcomeIntro";
import List from "./List";
import ImageListContainer from "./ImageListContainer";

export const BurgerTypeContext = createContext(null);

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
    <BurgerTypeContext.Provider
      value={{
        image,
        bbqBurger,
        carolina,
        friedChickenBurger,
        changeImageOnClick,
        changeImage,
      }}
    >
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

        <ImageListContainer />

        <SocialMediaSites />
      </div>
    </BurgerTypeContext.Provider>
  );
}

export default WelcomeContainer;
