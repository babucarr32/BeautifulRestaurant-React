import {React, useState, useEffect} from "react";
import Order from "../OrderNow/Order";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Menu.css";


function Menu() {
  
  // Get value it button clicked
  const itemToSave = ["Babucarr", "Badjie"];
  const [items, setItems] = useState([]);
  let itemNew = [];
  let newItems = {}
  // if(items){
  //   localStorage.setItem('items', JSON.stringify(items));
  // }

  const AddItem = (event)=>{
    const burgerPrice = event.target.parentElement.children[0].innerText;
    const burgerName = event.target.parentElement.parentElement.children[0].innerText;
    
    let getLStorage = JSON.parse(localStorage.getItem('items'));
    if(getLStorage === null){
      newItems = [{burgerName, burgerPrice}]
      localStorage.setItem('items', JSON.stringify(newItems));
      // getLStorage = JSON.parse(localStorage.getItem('items'));
      // itemNew.push(getLStorage);
      // setItems(newItems);
      // console.log(itemNew)
    }
    else{
      getLStorage = JSON.parse(localStorage.getItem('items'));
      newItems = {burgerName, burgerPrice};
      getLStorage.push(newItems);
      // setItems(getLStorage);
      localStorage.setItem('items', JSON.stringify(getLStorage));
      // console.log("else")
      // console.log(getLStorage)

    }
    // const newItems = {burgerName, burgerPrice}
    // itemNew.push(JSON.parse(localStorage.getItem('items')));
    // setItems(newItems)
    // console.log(typeof getLStorage)
    // if(itemNew[0] === null){
    //   console.log(items)
    //   // localStorage.setItem('items', JSON.stringify(items));
    //   // console.log(items)
    //   // localStorage.setItem('items', JSON.stringify(items));
    // }
    // else{
    //   // console.log(itemNew)
    //   // itemNew.push(newItems)
    //   // console.log(itemNew);
    //   // setItems(itemNew)
    //   // localStorage.setItem('items', JSON.stringify(items));
    // }
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
            <button onClick={AddItem} className="addButton">Add +</button>
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