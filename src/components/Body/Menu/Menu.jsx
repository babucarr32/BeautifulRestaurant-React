import React from "react";
// import DISHES from "../../../data/dishes"
import DISHES from "../../../data/dishes";
import "../../../assets/css/Menu.css";


function Menu() {
  const mappedData = DISHES.map((data)=>{
    return (
      <div>
        <div className="menuItems">
          <img className="menuBurger" src={data.path} alt="" srcset="" />
          <div className="burgerNamePrice">
              <p id="burgerName">{data.name}</p>
            <div className="burgerPriceDiv">
              <p id="burgerPrice">${data.price}. <sup>00</sup> </p>
              <p><a href="">Add +</a></p>
            </div>
          </div>
        </div>
    </div>
  );
})
return (
  <>
  <div className="gridConatiner">
    {mappedData}
  </div>
  </>
)
}

export default Menu;