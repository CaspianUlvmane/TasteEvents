import React from "react";
import ReactDOM from "react-dom/client";
import Car from "./Car";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
const headerDom = ReactDOM.createRoot(document.querySelector("header"));

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car name="Volvo" model="V70" />
    </>
  );
}

headerDom.render(<Header />);
root.render(<Garage />);
