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
  let list = [<a href="Admin">Event</a>, <a href="Blog">Blog</a>];

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

function AdminHeader() {
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

export default AdminHeader;
