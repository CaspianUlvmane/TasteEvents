import React from "react";
import "./Home.css";
import Button from "../components/Button";
import Badge from "../components/Badge";
import HomeContent from "../components/HomeContent";
import db from "../db/firebase";
import { doc, getDoc } from "firebase/firestore";
import ContentContainer from "../components/contentContainer";
import Footer from "../components/Footer";

const textRef = doc(db, "Home", "Content");
let textSnap = await getDoc(textRef);
let textData = textSnap.data();
let Bottom = textData.bottomText;

const SVRef = doc(db, "Home", "smallVenue");
let SVSnap = await getDoc(SVRef);
let SVData = SVSnap.data();

const LVRef = doc(db, "Home", "largeVenue");
let LVSnap = await getDoc(LVRef);
let LVData = LVSnap.data();

function BadgeLoad() {
  React.useEffect(() => {
    setTimeout(() => {
      document.getElementById("idContainer").classList.remove("open");
    }, 200);
  });
}

function ContentLoad() {
  React.useEffect(() => {
    setTimeout(() => {
      document.getElementById("content").classList.remove("open");
      document.getElementById("buttonMain").classList.remove("open");
    }, 200);
  });
}

function Home() {
  return (
    <>
      <Badge />
      <BadgeLoad />
      <div id="content" className="open">
        {<HomeContent />}
      </div>
      <Button id="toContact" text="Boka en provning!" navigation="./contact" />
      <div id="cardContainer">
        <ContentContainer data={SVData} />
        <ContentContainer data={LVData} />
      </div>
      <footer>
        <h3>{Bottom}</h3>
        <Footer />
      </footer>
      <ContentLoad />
    </>
  );
}

export default Home;
