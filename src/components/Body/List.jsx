import React from "react";

function List({ className, spice, child, onClickFunc }) {
  return (
    <li onClick={onClickFunc}>
      {spice ? <p className={className}>{spice}</p> : null}
      {child}
    </li>
  );
}

export default List;
