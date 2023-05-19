import React from "react";

function List({ className, spice }) {
  return (
    <li>
      <p className={className}>{spice}</p>
    </li>
  );
}

export default List;
