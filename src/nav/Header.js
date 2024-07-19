import "./Header.css";
import db from "../db/firebase.js";
import React from "react";
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "Header", "bh6lJtOCWTz8oIUZB9NK");
let docSnap = await getDoc(docRef);

let data = docSnap.data();

function listElements() {
  let list = [];
  let orderedKeys = [];
  //retrieves keys from db and selects relevant keys
  for (let key in data) {
    if (key !== "Banner") {
      orderedKeys.push(key);
    }
  }

  //sorts keys by value because the retrieved order is random
  orderedKeys.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));

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
  return (
    <>
      <img
        id="banner"
        className="open"
        src={data.Banner}
        alt="Taste Events by Wolfmoon"
      ></img>
      <div id="navigation" className="open">
        {listElements()}
      </div>
      <HeaderLoad />
    </>
  );
}

export default Header;
