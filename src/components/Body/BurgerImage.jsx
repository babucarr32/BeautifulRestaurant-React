import React from "react";
import image from "../../assets/images/NewBurger.png";

function BurgerImage() {
  return (
    <div>
        <div className="mainImage" >
            <img id="mainImage" src={image} alt=""/>
        </div>
    </div>
  );
}

export default BurgerImage;
