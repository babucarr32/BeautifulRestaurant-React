import React from "react";
import List from "./List";

function SpicyAddToCart() {
  return (
    <div className="addToCart">
      <ul>
        <List className={"addToCartText"} spice={"Add +"} />
        <List className={"price"} spice={"$12.99"} />
        <li className="delList">
          <del>$16.99</del>
        </li>
      </ul>
    </div>
  );
}

export default SpicyAddToCart;
