import React from "react";
import "../../../assets/css/Location.css"


function Location() {
  return (
    <div className="locationContainer">
      <div className="imgDiv">
        <img src="assets\images\undraw_map_re_60yf.svg" alt="" />
      </div>
      <div className="locationInfo">
        <div className="locationIntro">
          <h1>LOCATION:</h1>
          <p>121 Rock Street, 21 Avenue.</p>
          <p>Banjul, BJL 123-45678.</p>
        </div>
      </div>
    </div>
  );
}

export default Location;