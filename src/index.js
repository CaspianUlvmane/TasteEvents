import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./nav/Header";
import App from "./App";

const main = ReactDOM.createRoot(document.querySelector("main"));
const headerDom = ReactDOM.createRoot(document.querySelector("header"));

headerDom.render(<Header />);
main.render(<App />);
