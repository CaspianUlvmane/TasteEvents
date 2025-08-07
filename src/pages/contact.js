import { doc, getDoc } from "firebase/firestore";
import db from "../db/firebase";
import "./Contact.css";
import "./Contact_mobile.css";
import { Helmet } from "react-helmet";

const postRef = doc(db, "Contact", "Content");
let postData = await getDoc(postRef);
postData = postData.data();

function Contact() {
  document.querySelector("main").id = "contact";
  return (
    <>
      <Helmet>
        <title>Kontakt | Taste Events by Wolfmoon</title>
        <meta
          name="description"
          content="Kontakta Taste Events by Wolfmoon för frågor om smakupplevelser och event."
        />
        <meta
          name="keywords"
          content="kontakt, contact, wolfmoon, event, tasting"
        />
      </Helmet>
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
