import {React, useState, useEffect} from "react";
import OrderSummary from "./OrderSummary";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Order.css"

function Order() {
  let storage = JSON.parse(localStorage.getItem('items'))
  let [LSStorageItems, LSStorageItemsUpdate] = useState(storage);
  let [itemMapped, mappedItems] = useState(null);
  let [orderedItems, orderedItemsUpdate] = useState([]);
  let [quantityCount, quantityCountUpdate] = useState(1);
  
  const addProduct = (e, op, price, originalPrice, id)=>{
    let quantity = e.target.parentElement.children[1].textContent; 
    let addedQualiy = parseInt(quantity);
    op === "+" ? e.target.parentElement.children[1].textContent = addedQualiy+=1: e.target.parentElement.children[1].textContent = addedQualiy-=1;

    const getPrice = e.target.parentElement.parentElement.children[2].textContent;
    console.log(getPrice);
    let updatedQuantity = LSStorageItems.filter((data)=>data.id === id);
    let inner = updatedQuantity[0].burgerPrice;
    inner = inner + originalPrice;
    updatedQuantity[0].burgerPrice = inner;
    LSStorageItems.map((data, index)=>{
      if(updatedQuantity[0].id === data.id){
        LSStorageItemsUpdate(LSStorageItems[index] = updatedQuantity[0])
        localStorage.setItem('items', JSON.stringify(LSStorageItems));
        console.log(updatedQuantity[0])
      }
    })
  };

  useEffect(() => {
    orderedItemsUpdate(LSStorageItems);
    if (LSStorageItems) {
        mappedItems (itemMapped = LSStorageItems.map((e)=>{
        const originalPrice = e.burgerPrice;
        const filterDish = DISHES.filter((dish)=>dish.name === e.burgerName);
        return (
          <div className="row">
            <div className="cell">
              <img src={filterDish[0].path} alt="" />
            <p>{e.burgerName}</p>
            </div>
            <p className="quantity"><span onClick={(event)=>addProduct(event, "-", e.burgerPrice, originalPrice, e.id)} id="minus">-</span> <span id="quantity">1</span> <span onClick={(event)=>addProduct(event, "+", e.burgerPrice, originalPrice, e.id)} id="add">+</span></p>
            <p>${e.burgerPrice}</p>
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