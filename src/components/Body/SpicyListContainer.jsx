import React from "react";
import List from "./List";

function SpicyListContainer() {
  return (
    <ul>
      <List className={"Mild"} spice={"Mild"} />
      <List className={"Spicy"} spice={"MilSpicyd"} />
      <List className={"Hot"} spice={"Hot"} />
    </ul>
  );
}

export default SpicyListContainer;
