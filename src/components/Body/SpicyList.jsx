import React from "react";

function SpicyList({ className, spice }) {
  return (
    <ul>
      <li>
        <p className={className}>{spice}</p>
      </li>
    </ul>
  );
}

export default SpicyList;
