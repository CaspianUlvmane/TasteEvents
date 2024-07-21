import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./nav/Header";
import App from "./App";
import Footer from "./components/Footer";

const main = ReactDOM.createRoot(document.querySelector("main"));
const headerDom = ReactDOM.createRoot(document.querySelector("header"));
const footer = ReactDOM.createRoot(document.querySelector("footer"));

headerDom.render(<Header />);
main.render(<App />);
footer.render(<Footer />);
