import React, { useState } from "react";
import BurgerImage from "./BurgerImage";
import SocialMediaSites from "./SocialMediaSites";

function WelcomeContainer() {
  const [image, setImage] = useState("/assets/images/NewBurger.png");
  const [bbqBurger, setBbqBurger] = useState("/assets/images/NewBurger.png");
  const [carolina, setCarolina] = useState("/assets/images/Corolina.png");
  const [friedChickenBurger, setFriedChickenBurger] = useState(
    "/assets/images/friedChickenBurger.png"
  );

  const changeImage = (event) => {
    const imagePath = event.target.name;
    console.log(imagePath);
    try {
      document.getElementById("hideBurgerLast").src = this.state[imagePath];
      document.getElementById("hideBurgerFirst").src = this.state[imagePath];
    } catch (err) {}
  };

  return (
    <div className="welcomeText">
      <p className="welcome">
        <span>Welcome</span> to <br /> The worlds <br />{" "}
        <span>Best Restaurant</span>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
      <ul>
        <li>
          <p className="Mild">Mild</p>
        </li>
        <li>
          <p className="Spicy">Spicy</p>
        </li>
        <li>
          <p className="Hot">Hot</p>
        </li>
      </ul>
      <div className="addToCart">
        <ul>
          <li>
            <p className="addToCartText">Add +</p>
          </li>
          <li>
            <p className="price">$12.99</p>
          </li>
          <li className="delList">
            <del>$16.99</del>
          </li>
        </ul>
      </div>
      <div className="hideBurgerFirst">
        <BurgerImage id={"hideBurgerFirst"} />
      </div>
      <div className="burgerTypes">
        <ul>
          <li onClick={changeImage}>
            <img className="mainImages" src={image} name="image" alt="" />
          </li>
          <li onClick={changeImage}>
            <img src={bbqBurger} alt="" name="bbqBurger" />
          </li>
          <li onClick={changeImage}>
            <img src={carolina} alt="" name="carolina" />
          </li>
          <li onClick={changeImage}>
            <img src={friedChickenBurger} alt="" name="friedChickenBurger" />
          </li>
        </ul>
      </div>
      <SocialMediaSites />
    </div>
  );
}

export default WelcomeContainer;
