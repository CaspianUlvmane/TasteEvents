import { doc, getDoc } from "firebase/firestore";
import db from "../db/firebase";
import "./Contact.css";
import "./Contact_mobile.css";

const postRef = doc(db, "Contact", "Content");
let postData = await getDoc(postRef);
postData = postData.data();

function Contact() {
  document.querySelector("main").id = "contact";
  return (
    <>
      <h1>{postData.Title}</h1>
      <div id="socials">
        {postData.Text[0]}
        <a href={postData.Links.Facebook}>Taste Events By Wolfmoon</a>
        <a href={"mailto:" + postData.Links.Email}>{postData.Links.Email}</a>
      </div>
      <div id="phone">
        {postData.Text[1]}
        <a href={"tel:" + postData.Links.Phone}>{postData.Links.Phone}</a>
      </div>
    </>
  );
}

export default Contact;
