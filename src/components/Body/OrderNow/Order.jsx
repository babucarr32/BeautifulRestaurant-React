import {React, useState, useEffect} from "react";
import OrderSummary from "./OrderSummary";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Order.css"

function Order() {
  let [LSStorageItems, LSStorageItemsUpdate] = useState("");
  let [itemMapped, mappedItems] = useState(null);
  let [quantityCount, quantityCountUpdate] = useState(1);

  const addProduct = (e, op)=>{
    op === "+" ? quantityCountUpdate(quantityCount += 1): quantityCountUpdate(quantityCount -= 1)
    console.log(op)
  };
  useEffect(() => {
    LSStorageItemsUpdate = (LSStorageItems = JSON.parse(localStorage.getItem('items')));
    if (LSStorageItems) {
        mappedItems (itemMapped = LSStorageItems.map((e)=>{
        const filterDish = DISHES.filter((dish)=>dish.name == e.burgerName);
        return (
          <div className="row">
            <div className="cell">
              <img src={filterDish[0].path} alt="" />
            <p>{e.burgerName}</p>
            </div>
            <p className="quantity"><span onClick={(e)=>addProduct(e, "-")} id="minus">-</span> <span id="quantity">{quantityCount}</span> <span onClick={(e)=>addProduct(e, "+")} id="add">+</span></p>
            <p>{e.burgerPrice}</p>
          </div>
        );
      }))
    }
  });

  return (
    <div className="orderContainer">
      <div className="table">
          <div className="tableHeader"><p>PRODUCT</p></div>
          <div className="tableHeader"><p>QUANTITY</p></div>
          <div className="tableHeader"><p>PRICE</p></div>

        {itemMapped}
      </div>
      {/* <OrderSummary items = {orderedItems} quantity ={quantity}/> */}
    </div>
  );
}

export default Order;