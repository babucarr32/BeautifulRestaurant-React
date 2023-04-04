import {React, useState, useEffect} from "react";
import "../../../assets/css/Header.css"

function Order() {
  // const [items, setItems] = useState({name:"name", surname:"Surname"});
  // localStorage.setItem('items', JSON.stringify(items));
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
    // setItems(items);
    console.log("Order")
    console.log(items)
    }
  }, []);

  return (
    <div>
        <h1>I am Orders</h1>
    </div>
  );
}

export default Order;