import Image from "./Image";
import "./EventTeaser.css";
import React from "react";
import db from "../db/firebase";
import { update } from "firebase/database";
import { doc, setDoc, updateDoc } from "firebase/firestore";

function AdminEventTeaser({ obj }) {
  function EventLoad() {
    React.useEffect(() => {
      setTimeout(() => {
        document.getElementById(obj.id).classList.remove("open");
      }, 250);
    });
  }

  let date = new Date(obj.data.Date.seconds * 1000).toDateString();

  let url = obj.data.SquareImage ? obj.data.SquareImage : obj.data.Images[0];

  return (
    <>
      <div
        id={obj.id}
        className={obj.data.Active + " eventContainer open"}
        // onClick={() => {
        //   window.location = "/Event?event=" + obj.id;
        // }}
      >
        <div className="imageContainer">
          <Image url={url} alt={obj.data.Title} />
          <div className="imageDropShadow"></div>
        </div>
        <div className="textContent">
          <h2>{obj.data.Title}</h2>
          <p className="date">{date}</p>
          <p className="location">{obj.data.Location}</p>
        </div>
        <label class="switch">
          <input
            type="checkbox"
            onChange={activeEvent}
            defaultChecked={obj.data.Active}
          />
          <span class="slider round"></span>
        </label>
      </div>
      <EventLoad />
    </>
  );
}

async function activeEvent(event) {
  event.target.parentElement.parentElement.classList.toggle(false);

  const wEvent = doc(db, "Events", event.target.parentElement.parentElement.id);

  await updateDoc(wEvent, { Active: event.target.checked });
}

export default AdminEventTeaser;
