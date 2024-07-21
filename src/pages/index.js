import React from "react";
import "./Home.css";
import Button from "../components/Button";
import Badge from "../components/Badge";
import HomeContent from "../components/HomeContent";
import db from "../db/firebase";
import { doc, getDoc } from "firebase/firestore";
import ContentContainer from "../components/contentContainer";
import Footer from "../components/Footer";

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
      document.getElementById("cardContainer").classList.remove("open");
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
      <div id="cardContainer" className="open">
        <ContentContainer data={SVData} />
        <ContentContainer data={LVData} />
      </div>
      <ContentLoad />
    </>
  );
}

export default Home;
