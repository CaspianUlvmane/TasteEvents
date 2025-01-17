import Image from "./Image";
import "./EventTeaser.css";
import React from "react";
import db from "../db/firebase";
import { update } from "firebase/database";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";

function AdminNewEvent() {
  function EventLoad() {
    React.useEffect(() => {
      setTimeout(() => {
        document.getElementById("newEvent").classList.remove("open");
      }, 250);
    });
  }

  return (
    <>
      <div
        id="newEvent"
        className="false eventContainer open"
        onClick={newEvent}
      >
        <div className="textContent">
          <h2>Nytt event</h2>
          <h2>+</h2>
        </div>
      </div>
      <EventLoad />
    </>
  );
}

async function newEvent() {
  const eventId = prompt("Ge eventet ett id");
  console.log(eventId);

  await setDoc(doc(db, "Events", eventId), {
    Active: false,
    Book: "",
    Collaboration: "",
    CoverImage: "",
    Date: "",
    Link: "",
    Location: "",
    Price: "",
    SqaureImage: "",
    TextContent: [""],
    Title: "",
  });
}

export default AdminNewEvent;
