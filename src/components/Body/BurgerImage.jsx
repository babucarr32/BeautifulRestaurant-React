import React, { forwardRef } from "react";
import image from "../../assets/images/NewBurger.png";
import "../../assets/css/BurgerImage.css";

const BurgerImage = forwardRef(function BurgerImage({ id, imageRef }) {
  return (
    <div>
      <div className="mainImage">
        <img id={id} src={image} alt="" ref={imageRef} />
      </div>
    </div>
  );
});

export default BurgerImage;
