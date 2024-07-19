import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div id="buttonMain" className="open">
      <div id="buttonContainer">
        <button
          id={props.id}
          onClick={() => (window.location.href = props.navigation)}
        >
          {props.text}
        </button>
      </div>
    </div>
  );
}

export default Button;
