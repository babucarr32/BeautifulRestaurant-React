import React from "react";
import WelcomeText from "./WelcomeText";
import WelcomeIntro from "./WelcomeIntro";
import SpicyListContainer from "./SpicyListContainer";
import HideBurger from "./HideBurger";

function BurgerAndIntro() {
  return (
    <div className="burgerAndIntro">
      <div>
        <WelcomeText />
        <WelcomeIntro />
        <SpicyListContainer />
      </div>
      <HideBurger />
    </div>
  );
}

export default BurgerAndIntro;
