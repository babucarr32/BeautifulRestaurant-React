import { React, useState, useEffect } from "react";
import DISHES from "../../../data/dishes";
import "../../../assets/css/Menu.css";
import BurgerImage from "../BurgerImage";
import Button from "./Button";

function Menu() {
  // Get value it button clicked
  let newItems = {};
  const AddItem = (event, id, burgerPrice, burgerName) => {
    let getLStorage = JSON.parse(localStorage.getItem("items"));
    if (getLStorage === null) {
      newItems = [{ id, burgerName, burgerPrice }];
      localStorage.setItem("items", JSON.stringify(newItems));
    } else {
      getLStorage = JSON.parse(localStorage.getItem("items"));
      newItems = { id, burgerName, burgerPrice };
      getLStorage.push(newItems);
      localStorage.setItem("items", JSON.stringify(getLStorage));
    }
  };

  const mappedDishes = DISHES.map((data) => {
    return (
      <div>
        <div className="menuItems">
          <BurgerImage imgClass={"menuBurger"} imagePath={data.path} />
          <div className="burgerNamePrice">
            <p id="burgerName">{data.name}</p>
            <div className="burgerPriceDiv">
              <p id="burgerPrice">
                ${data.price}. <sup>00</sup>{" "}
              </p>
              <Button
                buttonFunc={(e) => AddItem(e, data.id, data.price, data.name)}
                className={"addButton"}
                text={"Add +"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="gridConatiner">{mappedDishes}</div>
    </>
  );
}

export default Menu;
