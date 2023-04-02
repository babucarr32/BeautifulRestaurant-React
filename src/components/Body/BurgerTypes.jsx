import React from "react";
import image from "../../assets/images/NewBurger.png";
import bbqBurger from "../../assets/images/BBQBurger.png";
import carolina from "../../assets/images/Corolina.png";
import friedChickenBurger from "../../assets/images/friedChickenBurger.png";

function BurgerTypes() {
  return (
    <div>
        <div className="burgerTypes">
            <ul>
            <li><img src={image} alt="" /></li>
            <li><img src={bbqBurger} alt="" /></li>
            <li><img src={carolina} alt="" /></li>
            <li><img src={friedChickenBurger} alt="" /></li>
            </ul>
        </div>
    </div>
  );
}

export default BurgerTypes;
