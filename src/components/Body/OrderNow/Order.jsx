import {React, useState, useEffect} from "react";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Order.css"

function Order() {
  let [itemMapped, setItemMapped] = useState(null);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      let mappedItems = items.map((e)=>{
        // Filtering the data
        const filterDish = DISHES.filter((dish)=>dish.name == e.burgerName);
        return (
          <div className="row">
            {/* Adding the filtered data to path */}
            <div className="cell">
              <img src={filterDish[0].path} alt="" srcset="" />
            </div>
            <div className="cell">
              <p>{e.burgerName}</p>
              <p>{e.burgerPrice}</p>
            </div>
          </div>
        );
      })
      setItemMapped(mappedItems)
    }
  }, []);
  return (
    <div className="order">
      <div className="table">
        <div className="row">
          <div className="cell header"><p>Header 1</p></div>
          <div className="cell header"><p>Header 1</p></div>
        </div>

        {itemMapped}
      </div>
    </div>
  );
}

export default Order;