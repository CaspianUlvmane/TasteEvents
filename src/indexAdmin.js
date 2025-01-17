import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./nav/Header";
import App from "./App";
import Footer from "./components/Footer";

const main = ReactDOM.createRoot(document.querySelector("main"));
const headerDom = ReactDOM.createRoot(document.querySelector("header"));
const footer = ReactDOM.createRoot(document.querySelector("footer"));

let scroll = 0;
window.addEventListener("scroll", (event) => {
  let previous = scroll + 5;
  scroll = window.scrollY;

  if (scroll > 400) {
    document.getElementById("burger").classList.add("closed");
  }
  if (previous > scroll + 6) {
    document.getElementById("burger").classList.remove("closed");
  }
});

headerDom.render(<Header />);
main.render(<App />);
footer.render(<Footer />);
