import {React, useState, useEffect} from "react";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Header.css"

function Order() {
  let [itemMapped, setItemMapped] = useState(null);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      let mappedItems = items.map((e)=>{
        // Filtering the data
        const filterDish = DISHES.filter((dish)=>dish.name == e.burgerName);
        return (
          <div>
            {/* Adding the filtered data to path */}
            <img src={filterDish[0].path} alt="" srcset="" />
              <h1>{e.burgerName}</h1>
          </div>
        );
      })
      setItemMapped(mappedItems)
    }
  }, []);
  return (
    <h1>{itemMapped}</h1>
  );
}

export default Order;