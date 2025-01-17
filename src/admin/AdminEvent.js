import { doc, getDoc } from "firebase/firestore";
import Image from "../components/Image";
import "./Event.css";
import "./Event_mobile.css";
import db from "../db/firebase";
import valid from "./valid";

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

function AdminEvent() {
  if (!valid) {
    window.location.href = "/Admin";
  }
  let textContent = [];

  postData.TextContent.forEach((element) => {
    textContent.push(<div>{element}</div>);
  });

  let date = new Date(postData.Date.seconds * 1000).toDateString();
  let day = "";
  let month = "";
  let number = "";
  let year = "";
  if (date !== "") {
    date.toString();
    day = date.split(" ")[0];
    month = date.split(" ")[1];
    number = date.split(" ")[2];
    year = date.split(" ")[3];
  }

  let address = "";
  let city = "";
  let url = "";
  if (postData.Location !== "") {
    address = postData.Location.split(",")[0];
    city = postData.Location.split(",")[1].split(" ")[3];
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
              {month} {number}
            </div>
            <div>{year}</div>
          </div>
          <Image url={url} />
          <div className="imageDropShadow"></div>
          <div id="location">
            {address} {city}
          </div>
        </div>
      </div>
      {textContent}
      <div>{postData.Price}</div>

      <div id="bottom">
        <div id="collab">{postData.Collaboration}</div>
        <div id="Booking">{postData.Book}</div>
        <a href={postData.Link}>{postData.Title}</a>
      </div>
    </>
  );
}

export default AdminEvent;
