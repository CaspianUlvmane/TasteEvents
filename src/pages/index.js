import React from "react";
import "./Home.css";
import "./Home_mobile.css";
import Button from "../components/Button";
import Badge from "../components/Badge";
import HomeContent from "../components/HomeContent";
import db from "../db/firebase";
import { doc, getDoc } from "firebase/firestore";
import ContentContainer from "../components/contentContainer";
import { Helmet } from "react-helmet";

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
  document.querySelector("main").classList.add("home");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Taste Events by Wolfmoon drivs av Anki Ulvmåne som sedan 2013 har arrangerat smakupplevelser runt om i Sverige."
        />
        <meta
          name="keywords"
          content="Taste Events, Wolfmoon, Anki Ulvmåne, smakupplevelser, whisky, gin, öl, calvados, cognac, rom, snaps, dryckesproving, Sverige"
        />
        <meta name="application-name" content="Taste Events by Wolfmoon" />
        <meta
          name="google-site-verification"
          content="wfTMWMhzFo7gvd9HWuhiVqyLjQyHV0tBPMFcaoHZ4aM"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/icon.svg" />
        <title>Taste Events by Wolfmoon</title>
      </Helmet>
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
