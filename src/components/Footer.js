import React from "react";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import "./Footer.css";
import db from "../db/firebase.js";
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "Footer", "Fo8RmnpvAGpfBSofWGqk");
let docSnap = await getDoc(docRef);

let data = docSnap.data();

const textRef = doc(db, "Home", "Content");
let textSnap = await getDoc(textRef);
let textData = textSnap.data();
let Bottom = textData.bottomText;

function FooterLoad() {
  React.useEffect(() => {
    setTimeout(() => {
      document.querySelector("footer").classList.remove("open");
    }, 250);
  });
}

function Footer() {
  return (
    <>
      <h3>{Bottom}</h3>
      <div>{data.Text}</div>
      <div id="socialBar">
        <a href="https://www.facebook.com/TasteEventsByWolfmoon/">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/mrswolfmoon/">
          <Instagram />
        </a>
      </div>
      <FooterLoad />
    </>
  );
}

export default Footer;
