import React from "react";
import facebook from "../../assets/images/icons/icons8-facebook.svg";
import whatsapp from "../../assets/images/icons/icons8-whatsapp.svg";
import twitter from "../../assets/images/icons/icons8-twitter.svg";
import instagram from "../../assets/images/icons/icons8-instagram.svg";
import "../../assets/css/SocialMediaSites.css";

function SocialMediaSites() {
  return (
    <div>
      <div className="sites">
        <ul>
          <li>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={whatsapp} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li className="twitter">
            <a href="">
              <img src={twitter} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SocialMediaSites;
