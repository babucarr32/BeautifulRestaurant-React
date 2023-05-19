import React, { useState, useRef, createContext } from "react";
import SocialMediaSites from "./SocialMediaSites";
import ImageListContainer from "./ImageListContainer";
import BurgerAndIntro from "./BurgerAndIntro";

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
        changeMainImageRef,
      }}
    >
      <div className="welcomeText">
        <BurgerAndIntro />
        <ImageListContainer />
        <SocialMediaSites />
      </div>
    </BurgerTypeContext.Provider>
  );
}

export default WelcomeContainer;