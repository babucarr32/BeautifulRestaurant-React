import {React, useState, useEffect} from "react";
import Order from "../OrderNow/Order";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Menu.css";


function Menu() {
  // Get value it button clicked
  let newItems = {}
  const AddItem = (event, id, burgerPrice, burgerName)=>{
    
    let getLStorage = JSON.parse(localStorage.getItem('items'));
    if(getLStorage === null){
      newItems = [{id, burgerName, burgerPrice}]
      localStorage.setItem('items', JSON.stringify(newItems));
    }
    else{
      getLStorage = JSON.parse(localStorage.getItem('items'));
      newItems = {id, burgerName, burgerPrice}
      getLStorage.push(newItems);
      localStorage.setItem('items', JSON.stringify(getLStorage));
    }
  }
  
  const mappedData = DISHES.map((data)=>{
  return (
    <div>
      <div className="menuItems">
        <img className="menuBurger" src={data.path} alt="" />
        <div className="burgerNamePrice">
            <p id="burgerName">{data.name}</p>
          <div className="burgerPriceDiv">
            <p id="burgerPrice">${data.price}. <sup>00</sup> </p>
            <button onClick={(e)=>AddItem(e, data.id, data.price, data.name)} className="addButton">Add +</button>
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