import React, { forwardRef } from "react";
import "../../assets/css/BurgerImage.css";

const BurgerImage = forwardRef(function BurgerImage({
  id,
  imageRef,
  imagePath,
  imgClass,
  imgName,
}) {
  return (
    <div>
      <div className={imageRef && "mainImage"}>
        <img
          className={imgClass}
          id={id}
          src={imagePath}
          alt=""
          ref={imageRef}
          name={imgName}
        />
      </div>
    </div>
  );
});

export default BurgerImage;
