import React, { Component } from "react";
import image from "../../assets/images/NewBurger.png";
import BurgerImage from "./BurgerImage";
import BurgerTypes from "./BurgerTypes";
import SocialMediaSites from "./SocialMediaSites";
import "../../assets/css/LandingPage.css";
import bbqBurger from "../../assets/images/BBQBurger.png";
import carolina from "../../assets/images/Corolina.png";
import friedChickenBurger from "../../assets/images/friedChickenBurger.png";


export class LandingPageContent extends Component {
  state = {
    image: image,
    bbqBurger: bbqBurger,
    carolina: carolina,
    friedChickenBurger: friedChickenBurger
  }
  render () {
    const changeImage = (event)=> {
      const imagePath = event.target.name;
      console.log(this.state)
      const x = document.getElementById("mainImage").src = this.state[imagePath];
    }
    console.log(this)
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
                        <li onClick={changeImage}><img id="mainImages" src={image} name="image" alt="" /></li>
                        <li onClick={changeImage}><img src={bbqBurger} alt="" name="bbqBurger" /></li>
                        <li onClick={changeImage}><img src={carolina} alt="" name="carolina" /></li>
                        <li onClick={changeImage}><img src={friedChickenBurger} alt="" name="friedChickenBurger" /></li>
                    </ul>
                </div>
            </div>
            <BurgerImage  />
          </div>
        </div>
    </div>
  );
}
}

// https://www.hungryjacks.com.au/menu/whopper/triple-whopper-cheese
export default LandingPageContent;
