import {React, useState, useEffect} from "react";
import OrderSummary from "../Menu/OrderSummary";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Order.css"

function Order() {
  const addProduct = (e)=>{
    const OP = e.target.textContent;
    console.log(e.target.parentElement.children[1].textContent);
    const quantitySpplitter = e.target.parentElement.textContent.split(" ");
    if(OP === "+"){
      let innerValue = e.target.parentElement.children[1].textContent;
      e.target.parentElement.children[1].textContent = parseInt(innerValue) + 1 ;
    }
  }
  let [itemMapped, setItemMapped] = useState(null);
  let [orderedItems, setOrderedItems] = useState([]);
  let addItems = []
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      let mappedItems = items.map((e)=>{
        // Filtering the data
        const filterDish = DISHES.filter((dish)=>dish.name == e.burgerName);
        setItemMapped(orderedItems.push(filterDish));
        return (
          <div className="row">
            {/* Adding the filtered data to path */}
            <div className="cell">
              <img src={filterDish[0].path} alt="" srcset="" />
            <p>{e.burgerName}</p>
            </div>
            <p className="quantity"><span onClick={addProduct} id="minus">-</span> <span id="quantity">3</span> <span onClick={addProduct} id="add">+</span></p>
            <p>{e.burgerPrice}</p>
          </div>
        );
      })
      setItemMapped(mappedItems)
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
      <OrderSummary items = {orderedItems}/>
    </div>
  );
}

export default Order;