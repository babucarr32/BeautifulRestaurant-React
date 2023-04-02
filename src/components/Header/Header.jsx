import React from "react";
import "../../assets/css/Header.css"

function Header() {
  const showHiddenItems = ()=>{
    console.log("clicked")
  }
  return (
    <div>
        <div className="header">
          <div className="headerHidden" onClick={showHiddenItems}>
            <div className="dotMain">
              <div className="dot">
              </div>
              <div className="dot">
              </div>
              <div className="dot last">
              </div>
            </div>
          </div>
          <ul>
            <li><a href="">Better Food</a></li>
            <li><a href="">Order Now</a></li>
            <li><a href="">Location</a></li>
            <li className="contact"><a href="">Contact Us</a></li>
          </ul>
        </div>
    </div>
  );
}

export default Header;