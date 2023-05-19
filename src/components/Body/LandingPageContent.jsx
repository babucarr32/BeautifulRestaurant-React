import React from "react";
import "../../assets/css/LandingPage.css";
import WelcomeContainer from "./WelcomeContainer";
import BurgerImage from "./BurgerImage";
import SocialMediaSites from "./SocialMediaSites";

const LandingPageContent = () => {
  return (
    <div>
      <div className="landingContent">
        <div className="landing">
          <div className="hideBurgerLast">
            <SocialMediaSites />
          </div>

          <WelcomeContainer />

          <div className="hideBurgerLast">
            <BurgerImage id={"hideBurgerLast"} />
          </div>
          <div className="hideBurgerFirst"></div>
        </div>
      </div>
    </div>
  );
};

// https://www.hungryjacks.com.au/menu/whopper/triple-whopper-cheese
export default LandingPageContent;
