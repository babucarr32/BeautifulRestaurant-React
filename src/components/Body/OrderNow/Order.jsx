import {React, useState, useEffect} from "react";
import OrderSummary from "./OrderSummary";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Order.css"

function Order() {
  let [LSStorageItems, LSStorageItemsUpdate] = useState("");

  useEffect(() => {
    LSStorageItemsUpdate = (LSStorageItems = JSON.parse(localStorage.getItem('items')));
    
    if (LSStorageItems) {
      let mappedItems = LSStorageItems.map((e)=>{
        console.log(e)
        const filterDish = DISHES.filter((dish)=>dish.name == e.burgerName);
        // return (
        //   <div className="row">
        //     <div className="cell">
        //       <img src={filterDish[0].path} alt="" />
        //     <p>{e.burgerName}</p>
        //     </div>
        //     <p className="quantity"><span onClick={(e)=>addProduct(e, filterDish[0].id, filterDish[0].price)} id="minus">-</span> <span id="quantity">1</span> <span onClick={(e)=>addProduct(e, filterDish[0].id, filterDish[0].price)} id="add">+</span></p>
        //     <p>{e.burgerPrice}</p>
        //   </div>
        // );
      })
    }
  }, []);
  return (
    <div className="orderContainer">
      <div className="table">
          <div className="tableHeader"><p>PRODUCT</p></div>
          <div className="tableHeader"><p>QUANTITY</p></div>
          <div className="tableHeader"><p>PRICE</p></div>

        {/* {itemMapped} */}
      </div>
      {/* <OrderSummary items = {orderedItems} quantity ={quantity}/> */}
    </div>
  );
}

export default Order;