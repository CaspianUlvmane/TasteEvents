import Image from "./Image";
import "./EventTeaser.css";
import React from "react";

function EventTeaser({ obj }) {
  function EventLoad() {
    React.useEffect(() => {
      setTimeout(() => {
        document.getElementById(obj.id).classList.remove("open");
      }, 250);
    });
  }

  let date = obj.data.Date.seconds
    ? new Date(obj.data.Date.seconds * 1000)
        .toLocaleString("sv-SV", {
          timeZone: "CET",
        })
        .slice(0, 16)
    : "Datum kommer snart!";

  let url = obj.data.SquareImage ? obj.data.SquareImage : obj.data.Images[0];
  console.log(obj);

  return (
    <>
      <div
        id={obj.id}
        className="eventContainer open"
        onClick={() => {
          window.location = "/Event?event=" + obj.id;
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
      </div>
      <EventLoad />
    </>
  );
}

export default EventTeaser;
