import React from "react";
import {Link} from "react-router-dom"
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
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/order">Order Now</Link></li>
            <li><Link to="/location">Location</Link></li>
            <li className="contact"><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
    </div>
  );
}

export default Header;