import { React, useState, useEffect } from "react";
import OrderSummary from "./OrderSummary";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Order.css";

function Order() {
  const [lsItems, setLsItems] = useState([]);
  useEffect(() => {
    const fetchItemsFromLS = () => {
      const items = localStorage.getItem("items");
      if (items) setLsItems(JSON.parse(items));
    };
    fetchItemsFromLS();
  }, []);

  const itemsJSX = lsItems.map((items) => {
    const imageFindter = DISHES.find((dish) => dish.id === items.id);
    return (
      <tr>
        <td>
          <img src={imageFindter.path} alt="" srcset="" />
        </td>
        <td>
          <span>+</span>
          <p>10</p> <span>-</span>
        </td>
        <td>
          <p>${items.burgerPrice}</p>
        </td>
      </tr>
    );
  });

  return (
    <div className="orderContainer">
      <table>
        <tr>
          <th>PRODUCT</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
        </tr>
        {itemsJSX}
      </table>

      {/* <OrderSummary items={orderedItems} /> */}
    </div>
  );
}

export default Order;
