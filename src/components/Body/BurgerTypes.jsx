import React, { Component } from "react";
import LandingPageContent from "./LandingPageContent";
import BurgerImage from "./BurgerImage";
import image from "../../assets/images/NewBurger.png";
import bbqBurger from "../../assets/images/BBQBurger.png";
import carolina from "../../assets/images/Corolina.png";
import friedChickenBurger from "../../assets/images/friedChickenBurger.png";

export class BurgerTypes extends Component{
    state = {
        BurgerTypes: null
    }
    render(){
        const BurgerType = ()=>{
            < LandingPageContent key={"test"}/>
        console.log("Burger type");
        const BurgerTypes = <BurgerImage image={image} />
        this.setState({BurgerTypes: BurgerTypes})
    }
    console.log(this.state)

    
    return (
        <div>
        <div className="burgerTypes">
            <ul>
                <li>{this.state.BurgerTypes}</li>
                <li onClick={BurgerType}><img src={image} alt="" /></li>
                <li onClick={BurgerType}><img src={bbqBurger} alt="" /></li>
                <li onClick={BurgerType}><img src={carolina} alt="" /></li>
                <li onClick={BurgerType}><img src={friedChickenBurger} alt="" /></li>
            </ul>
        </div>
    </div>
  );
}
}

export default BurgerTypes;
