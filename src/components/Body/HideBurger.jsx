import React, { useContext } from "react";
import BurgerImage from "./BurgerImage";
import { BurgerTypeContext } from "./WelcomeContainer";

function HideBurger() {
  const { image, changeMainImageRef } = useContext(BurgerTypeContext);
  return (
    <div className="hideBurgerFirst">
      <BurgerImage
        id={"hideBurgerFirst"}
        imageRef={changeMainImageRef}
        imagePath={image}
      />
    </div>
  );
}

export default HideBurger;
