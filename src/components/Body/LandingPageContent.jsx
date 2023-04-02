import React from "react";
import image from "../../assets/images/NewBurger.png";
import "../../assets/css/LandingPage.css";

function LandingPageContent() {
  return (
    <div>
        <div className="landingContent">
          <div className="landing">
            <div className="welcomeText">
                <p>Welcome to <br /> The worlds <br /> Best Restaurant</p>
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
