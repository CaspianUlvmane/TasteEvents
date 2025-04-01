import Image from "./Image";
import "./EventTeaser.css";
import React from "react";
import db from "../db/firebase";
import { update } from "firebase/database";
import { deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";

function AdminEventTeaser({ obj }) {
  function EventLoad() {
    React.useEffect(() => {
      setTimeout(() => {
        document.getElementById(obj.id).classList.remove("open");
      }, 250);
    });
  }

  let date = new Date(obj.data.Date.seconds * 1000).toDateString();

  let url = obj.data.SquareImage
    ? obj.data.SquareImage
    : "https://firebasestorage.googleapis.com/v0/b/tasteevents.appspot.com/o/Quality-Ikon.png?alt=media&token=d252e9c5-f63f-4092-8dfb-5e8dbd9aecd1";

  return (
    <>
      <div
        id={obj.id}
        className={obj.data.Active + " eventContainer open"}
        onClick={() => {
          window.location = "/Admin/Event?event=" + obj.id;
        }}
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
        <label class="switch" onClick={(event) => event.stopPropagation()}>
          <input
            onChange={activeEvent}
            type="checkbox"
            defaultChecked={obj.data.Active}
          />
          <span class="slider round"></span>
        </label>
        <div className="delete" onClick={(event) => deleteEvent(event)}>
          X
        </div>
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

async function deleteEvent(event) {
  event.stopPropagation();

  let bool = window.confirm("Säker att du vill ta bort eventet för gott?");

  if (bool) {
    await deleteDoc(doc(db, "Events", event.target.parentElement.id));
    event.target.parentElement.remove();
  }
}

export default AdminEventTeaser;
