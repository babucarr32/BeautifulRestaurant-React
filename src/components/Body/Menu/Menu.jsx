import React from "react";
// import DISHES from "../../../data/dishes"
import DISHES from "../../../data/dishes";
import "../../../assets/css/Menu.css";


function Menu() {
  const mappedData = DISHES.map((data)=>{
    return (
      <div>
        <div className="menuItems">
          <img className="menuBurger" src={data.path} alt="" srcset="" />
          <p>{data.name}</p>
        </div>
    </div>
  );
})
return (
  <>
  <div className="gridConatiner">
    {mappedData}
  </div>
  </>
)
}

export default Menu;