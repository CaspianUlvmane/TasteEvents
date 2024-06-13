import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";

const main = ReactDOM.createRoot(document.getElementById("main"));
const headerDom = ReactDOM.createRoot(document.querySelector("header"));

headerDom.render(<Header />);
