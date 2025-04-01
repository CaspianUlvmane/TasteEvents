import { doc, getDoc } from "firebase/firestore";
import Image from "../components/Image";
import "./Event.css";
import "./Event_mobile.css";
import db from "../db/firebase";

function capitalization(text) {
  return String(text).charAt(0).toUpperCase() + String(text).slice(1);
}

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("event");
let postData;
if (postId) {
  const postRef = doc(db, "Events", postId);
  postData = await getDoc(postRef);
  postData = postData.data();
  document.querySelector("main").id = "eventPage";
} else {
}

function Event() {
  let textContent = [];

  postData.TextContent.forEach((element) => {
    if (element.includes("/n")) {
      let paragraphs = element.split("/n");
      let pDiv = [];
      paragraphs.forEach((p) => {
        pDiv.push(<p>{p}</p>);
      });
      textContent.push(<div className="textContent">{pDiv}</div>);
    } else {
      textContent.push(<div className="textContent">{element}</div>);
    }
  });

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "CET",
  };
  let date = postData.Date.seconds
    ? new Date(postData.Date.seconds * 1000).toLocaleString(
        "sv-SV",
        dateOptions
      )
    : new Date().toLocaleString("sv-SV", dateOptions);

  let time = new Date(postData.Date.seconds * 1000).toLocaleString("sv-SV", {
    hour12: false,
  });
  time = time.split(" ")[1];
  time = "Kl: " + time.slice(0, 5);

  let day = "";
  let month = "";
  let number = "";
  let year = "";
  console.log(date);

  if (date !== "" && date !== "Invalid Date") {
    date.toString();
    day = capitalization(date.split(" ")[0]);
    month = capitalization(date.split(" ")[2]);
    number = date.split(" ")[1];
    year = date.split(" ")[3];
  } else {
    day = "Datum";
    month = "kommer";
    year = "snart!";
  }

  let address = "";
  let url = "";
  if (postData.Location !== "") {
    address = postData.Location;
  }
  url = postData.CoverImage ? postData.CoverImage : postData.Images[0];
  return (
    <>
      <div id="top">
        <h1>{postData.Title}</h1>
        <div className="imageContainer">
          <div id="date">
            <div>{day}</div>
            <div>
              {number} {month}
            </div>
            <div>{year}</div>
            <div>{time}</div>
          </div>
          <Image url={url} />
          <div className="imageDropShadow"></div>
          <div id="location">{address}</div>
        </div>
      </div>
      {textContent}
      <div id="priceContainer">
        {postData.Price.includes("/n")
          ? postData.Price.split("/n").map((p) => <div>{p}</div>)
          : postData.Price}
      </div>

      <div id="bottom">
        <div id="collab">{postData.Collaboration}</div>
        <div id="Booking">
          {postData.Book.includes("/n")
            ? postData.Book.split("/n").map((p) => <div>{p}</div>)
            : postData.Book}
        </div>
        <a
          href={
            postData.Link.includes("@")
              ? "mailto:" + postData.Link
              : postData.Link
          }
        >
          {postData.Title}
        </a>
      </div>
    </>
  );
}

export default Event;
