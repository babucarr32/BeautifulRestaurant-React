import React from "react";
import image from "../../assets/images/NewBurger.png";
import bbqBurger from "../../assets/images/BBQBurger.png";
import carolina from "../../assets/images/Corolina.png";
import friedChickenBurger from "../../assets/images/friedChickenBurger.png";
import SocialMediaSites from "./SocialMediaSites";
import "../../assets/css/LandingPage.css";

function LandingPageContent() {
  return (
    <div>
        <div className="landingContent">
          <div className="landing">
            <SocialMediaSites />
            <div className="welcomeText">
                <p className="welcome"><span>Welcome</span>  to <br /> The worlds <br /> <span>Best Restaurant</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <ul>
                  <li><p className="Mild">Mild</p></li>
                  <li><p className="Spicy">Spicy</p></li>
                  <li><p className="Hot">Hot</p></li>
                </ul>
                <div className="addToCart">
                  <ul>
                    <li><p className="addToCartText">Add To Cart</p></li>
                    <li><p className="price">$12.99</p></li>
                    <li className="delList"><del>$16.99</del></li>
                  </ul>
                </div>
                <div className="burgerTypes">
                  <ul>
                    <li><img src={image} alt="" /></li>
                    <li><img src={bbqBurger} alt="" /></li>
                    <li><img src={carolina} alt="" /></li>
                    <li><img src={friedChickenBurger} alt="" /></li>
                  </ul>
                </div>
            </div>
            <div className="mainImage">
                <img src={image} alt="" />
            </div>
          </div>
        </div>
    </div>
  );
}

// https://www.hungryjacks.com.au/menu/whopper/triple-whopper-cheese
export default LandingPageContent;
