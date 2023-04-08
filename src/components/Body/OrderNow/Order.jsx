import {React, useState, useEffect} from "react";
import OrderSummary from "./OrderSummary";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Order.css"

function Order() {
  let [LSStorageItems, LSStorageItemsUpdate] = useState("");
  let [itemMapped, mappedItems] = useState(null);
  let [orderedItems, orderedItemsUpdate] = useState([]);
  let [quantityCount, quantityCountUpdate] = useState(1);
  let [defaultBurgerPrice, defaultBurgerPriceUpdate] = useState(1);

  const addProduct = (e, op, price)=>{
    op === "+" ? quantityCountUpdate(quantityCount += 1): quantityCountUpdate(quantityCount -= 1)
    defaultBurgerPriceUpdate(defaultBurgerPrice += price);
    let quantity = e.target.parentElement.children[1].textContent; 
    let addedQualiy = parseInt(quantity);
    e.target.parentElement.children[1].textContent = addedQualiy+=1;
  };
  

  useEffect(() => {
    LSStorageItemsUpdate = (LSStorageItems = JSON.parse(localStorage.getItem('items')));
    orderedItemsUpdate(LSStorageItems);
    if (LSStorageItems) {
        mappedItems (itemMapped = LSStorageItems.map((e)=>{
        const filterDish = DISHES.filter((dish)=>dish.name == e.burgerName);
        return (
          <div className="row">
            <div className="cell">
              <img src={filterDish[0].path} alt="" />
            <p>{e.burgerName}</p>
            </div>
            <p className="quantity"><span onClick={(event)=>addProduct(event, "-", e.burgerPrice)} id="minus">-</span> <span id="quantity">1</span> <span onClick={(event)=>addProduct(event, "+", e.burgerPrice)} id="add">+</span></p>
            
            <p>{e.burgerPrice}</p>
          </div>
        );
      }))
    }
  }, [quantityCount]);

  return (
    <div className="orderContainer">
      <div className="table">
          <div className="tableHeader"><p>PRODUCT</p></div>
          <div className="tableHeader"><p>QUANTITY</p></div>
          <div className="tableHeader"><p>PRICE</p></div>

        {itemMapped}
      </div>
      <OrderSummary items = {orderedItems} />
    </div>
  );
}

export default Order;