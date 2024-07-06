import React from "react";
import "./Home.css";
import Button from "../components/Button";
import Badge from "../components/Badge";
import HomeContent from "../components/HomeContent";

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
      <ContentLoad />
      <div id="buttonMain" className="open">
        <div id="buttonContainer">
          <Button
            id="toContact"
            text="Boka en provning!"
            navigation="./contact"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
