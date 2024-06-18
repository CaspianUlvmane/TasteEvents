import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      id={props.id}
      onClick={() => (window.location.href = props.navigation)}
    >
      {props.text}
    </button>
  );
}

export default Button;
