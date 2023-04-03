import React from "react";
import "../../assets/css/Header.css"

function Header() {
  let show = false;
  const showHiddenItems = ()=>{
    show = !show
    console.log(show)
    if(show){
      document.getElementById("toShow").style.display = "block";
    }
    else{
      document.getElementById("toShow").style.display = "none";
    }
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
          <ul id="toShow">
            <li><a href="">Menu</a></li>
            <li><a href="">Order Now</a></li>
            <li><a href="">Location</a></li>
            <li className="contact"><a href="">Contact Us</a></li>
          </ul>
        </div>
    </div>
  );
}

export default Header;