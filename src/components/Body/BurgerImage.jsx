import React from "react";
import image from "../../assets/images/NewBurger.png";
import "../../assets/css/BurgerImage.css"

function BurgerImage(props) {
  return (
    <div>
        <div className="mainImage" >
            <img id={props.id} src={image} alt=""/>
        </div>
    </div>
  );
}

export default BurgerImage;
