import React from "react";

function Button({ buttonFunc, className, text }) {
  return (
    <button onClick={buttonFunc} className={className}>
      {text}
    </button>
  );
}

export default Button;
