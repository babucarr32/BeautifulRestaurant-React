import React from "react";
import image from "../../assets/images/NewBurger.png";
import "../../assets/css/LandingPage.css";

function LandingPageContent() {
  return (
    <div>
        <div className="landingContent">
          <div className="landing">
            <div className="welcomeText">
                <p className="welcome"><span>Welcome</span>  to <br /> The worlds <br /> <span>Best Restaurant</span></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <ul>
                  <li><p>Mild</p></li>
                  <li><p className="Spicy">Spicy</p></li>
                  <li><p>Hot</p></li>
                </ul>
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
