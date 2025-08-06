import Image from "./Image";
import "./EventTeaser.css";
import React from "react";
import db from "../db/firebase";
import { update } from "firebase/database";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
function capitalization(text) {
  return String(text).charAt(0).toUpperCase() + String(text).slice(1);
}
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
  let eventId = prompt("Ge eventet ett id");
  eventId = capitalization(eventId);
  await setDoc(doc(db, "Events", eventId), {
    Active: false,
    Book: "",
    Collaboration: "",
    CoverImage: "",
    Date: "",
    Link: "",
    Location: "",
    Price: "",
    SquareImage: "",
    TextContent: [""],
    Title: "",
  });
  window.location.href = "/Admin/Event?event=" + eventId;
}

export default AdminNewEvent;
