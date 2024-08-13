import "./Header.css";
import "./Header_mobile.css";
import React from "react";
import db from "../db/firebase.js";
import { doc, getDoc } from "firebase/firestore";
import Burger from "./Burger.js";

const docRef = doc(db, "Header", "bh6lJtOCWTz8oIUZB9NK");
let docSnap = await getDoc(docRef);

let data = docSnap.data();

function listElements() {
  let list = [];
  let orderedKeys = [];
  //retrieves keys from db and selects relevant keys
  for (let key in data) {
    if (key === "Banner" || key === "Banner_mobile") {
    } else orderedKeys.push(key);
  }

  //sorts keys by value because the retrieved order is random
  orderedKeys.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
  console.log(orderedKeys);

  //create link elements for each key with data from db
  for (let key of orderedKeys) {
    let link = "/" + data[key].Link;

    let element = <a href={link}>{data[key].Title}</a>;

    list.push(element);
  }

  return list;
}

function HeaderLoad() {
  React.useEffect(() => {
    setTimeout(() => {
      document.getElementById("banner").classList.remove("open");
      document.getElementById("navigation").classList.remove("open");
    }, 250);
  });
}

function Header() {
  let banner;
  let burger;
  if (window.innerWidth < 1000) {
    banner = data.Banner_mobile;
    burger = <Burger />;
  } else {
    banner = data.Banner;
    burger = <Burger />;
  }

  return (
    <>
      <img
        id="banner"
        className="open"
        src={banner}
        alt="Taste Events by Wolfmoon"
      ></img>
      <div id="navigation" className="open">
        {listElements()}
      </div>
      {burger}
      <HeaderLoad />
    </>
  );
}

export default Header;
