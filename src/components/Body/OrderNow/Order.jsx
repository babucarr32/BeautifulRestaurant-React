import {React, useState, useEffect} from "react";
import OrderSummary from "./OrderSummary";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Order.css"

function Order() {

  let [quantity, updateQuantity] = useState(0)
  const addProduct = (e)=>{
    const OP = e.target.textContent;
    // console.log(e.target.parentElement.children[1].textContent);
    const quantitySpplitter = e.target.parentElement.textContent.split(" ");
    // Incrementing number
    if(OP === "+"){
      try{
        updateQuantity(mappedItems.length += 1);
      }
      catch(e){
        return e
      }
      // console.log(quantity);
      let innerValue = e.target.parentElement.children[1].textContent;
      e.target.parentElement.children[1].textContent = parseInt(innerValue) + 1 ;
      // console.log(quantity);
    }
    else{
      try{
        updateQuantity(mappedItems.length -= 1);
      }
      catch(e){
        return e
      }
      let innerValue = e.target.parentElement.children[1].textContent;
      if(innerValue > 1){
        e.target.parentElement.children[1].textContent = parseInt(innerValue) - 1 ;
      }
    }
  }
  let [itemMapped, setItemMapped] = useState(null);
  let [orderedItems, setOrderedItems] = useState([]);
  let addItems = [];
  let mappedItems = [];
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      mappedItems = items.map((e)=>{
        // Filtering the data
        const filterDish = DISHES.filter((dish)=>dish.name == e.burgerName);
        setItemMapped(orderedItems.push(filterDish));
        return (
          <div className="row">
            {/* Adding the filtered data to path */}
            <div className="cell">
              <img src={filterDish[0].path} alt="" />
            <p>{e.burgerName}</p>
            </div>
            <p className="quantity"><span onClick={addProduct} id="minus">-</span> <span id="quantity">1</span> <span onClick={addProduct} id="add">+</span></p>
            <p>{e.burgerPrice}</p>
          </div>
        );
      })
      setItemMapped(mappedItems);
      // console.log(quantity);
      updateQuantity(mappedItems.length);
      console.log(quantity);
    }
  }, []);
  return (
    <div className="orderContainer">
      <div className="table">
          <div className="tableHeader"><p>PRODUCT</p></div>
          <div className="tableHeader"><p>QUANTITY</p></div>
          <div className="tableHeader"><p>PRICE</p></div>

        {itemMapped}
      </div>
      <OrderSummary items = {orderedItems} quantity ={quantity}/>
    </div>
  );
}

export default Order;