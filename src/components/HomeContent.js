import React from "react";
import db from "../db/firebase";
import { doc, getDoc } from "firebase/firestore";

const textRef = doc(db, "Home", "Content");
let textSnap = await getDoc(textRef);
let textData = textSnap.data();

function HomeContent() {
  let list = [];
  for (let text of textData.Text) {
    let element = <div>{text}</div>;
    list.push(element);
  }
  return list;
}

export default HomeContent;
