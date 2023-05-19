import React from "react";
import "../../../assets/css/Location.css";
import Paragraph from "../ContactUs/Paragraph";
import BurgerImage from "../BurgerImage";

function Location() {
  return (
    <div className="locationContainer">
      <div className="imgDiv">
        <BurgerImage imagePath={"/assets/images/undraw_map_re_60yf.svg"} />
      </div>
      <div className="locationInfo">
        <div className="locationIntro">
          <Paragraph>
            <h1>LOCATION:</h1>
          </Paragraph>
          <Paragraph>
            <p>121 Rock Street, 21 Avenue.</p>
          </Paragraph>
          <Paragraph>
            <p>Banjul, BJL 123-45678.</p>
          </Paragraph>
        </div>
      </div>
    </div>
  );
}

export default Location;
