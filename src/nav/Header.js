import "./Header.css";
import db from "../db/firebase.js";
import React from "react";
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "Header", "bh6lJtOCWTz8oIUZB9NK");
let docSnap = await getDoc(docRef);

console.log(docSnap.data());
let data = docSnap.data();

function listElements() {
  let list = [];
  let orderedKeys = [];
  //retrieves keys from db and selects relevant keys
  for (let key in data) {
    if (key !== "Banner") {
      orderedKeys.push(key);
      console.log(orderedKeys);
    }
  }

  //sorts keys by value because the retrieved order is random
  orderedKeys.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));

  //create link elements for each key with data from db
  for (let key of orderedKeys) {
    let link = "/" + data[key].Link;
    console.log(link);
    let element = <a href={link}>{data[key].Title}</a>;
    console.log(element);
    list.push(element);
  }

  return list;
}

function Header() {
  return (
    <>
      <img id="banner" src={data.Banner} alt="Taste Events by Wolfmoon"></img>
      <div id="navigation">{listElements()}</div>
    </>
  );
}

export default Header;
