import {React, useState, useEffect} from "react";
import Order from "../OrderNow/Order";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Menu.css";


function Menu() {
  const itemToSave = ["Babucarr", "Badjie"];
  const [items, setItems] = useState({name:"Babucarr", surname:"Badjie"});
  localStorage.setItem('items', JSON.stringify(items));

  // Get value it button clicked
  const addItem = (event)=>{
    console.log(event.target.parentElement.children[0].innerText)
    // return(event)
  }
  const mappedData = DISHES.map((data)=>{
  return (
    <div>
      <div className="menuItems">
        <img className="menuBurger" src={data.path} alt="" srcset="" />
        <div className="burgerNamePrice">
            <p id="burgerName">{data.name}</p>
          <div className="burgerPriceDiv">
            <p id="burgerPrice">${data.price}. <sup>00</sup> </p>
            <button onClick={addItem} className="addButton">Add +</button>
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