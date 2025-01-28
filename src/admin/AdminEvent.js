import { doc, getDoc, setDoc } from "firebase/firestore";
import Image from "../components/Image";
import "./AdminEvent.css";
import "./Event_mobile.css";
import db from "../db/firebase";
import valid from "./valid";
import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";

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
  document.querySelector("body").id = "Admin";
  console.log(postData);

  let textContent = [];

  postData.TextContent.forEach((element) => {
    textContent.push(
      <div className="adminTextContent" contentEditable>
        {element}
      </div>
    );
  });
  console.log(postData.Date);

  let date = postData.Date.seconds
    ? new Date(postData.Date.seconds * 1000).toLocaleString("sv-SV", {
        timeZone: "CET",
      })
    : new Date().toLocaleString("sv-SV", {
        timeZone: "CET",
      });

  let address = "";
  let city = "";
  let postal = "";
  let url = "";
  if (postData.Location !== "") {
    address = postData.Location.split(",")[0];
    city = postData.Location.split(",")[1].split(" ")[3];
    postal =
      postData.Location.split(",")[1].split(" ")[1] +
      postData.Location.split(",")[1].split(" ")[2];
  }
  url = postData.CoverImage
    ? postData.CoverImage
    : "https://firebasestorage.googleapis.com/v0/b/tasteevents.appspot.com/o/Quality-Ikon.png?alt=media&token=d252e9c5-f63f-4092-8dfb-5e8dbd9aecd1";
  const squareUrl = postData.squareImage
    ? postData.squareImage
    : "https://firebasestorage.googleapis.com/v0/b/tasteevents.appspot.com/o/Quality-Ikon.png?alt=media&token=d252e9c5-f63f-4092-8dfb-5e8dbd9aecd1";
  return (
    <>
      <div id="window">
        <div id="buttonStack">
          <button onClick={chooseImage}>Välj</button>
          <button onClick={closeWindow}>stäng</button>
        </div>
        <div id="containerDiv">
          <select onChange={changeImage}></select>
          <div id="imgDiv"></div>
        </div>
      </div>
      <div id="Controlls">
        <a href={"/Event?event=" + postId}>Kund vy</a>
        <div>
          <label>Aktiv</label>
          <label
            class="AdminSwitch"
            onClick={(event) => event.stopPropagation()}
          >
            <input type="checkbox" defaultChecked={postData.Active} />
            <span class="slider round"></span>
          </label>
        </div>
        <button onClick={saveChanges}>Spara</button>
      </div>
      <div id="top">
        <label>Titel</label>
        <h1 contentEditable id="title">
          {postData.Title}
        </h1>
        <div id="AdminDate">
          <label> Datum {date}</label>
          <input
            type="datetime-local"
            id="dateTime"
            defaultValue={date}
            onInput={changeDate}
          ></input>
        </div>
        <div className="imageContainer"></div>
        <Image url={url} />
        <div id="selectImage">
          <div id="fileUpload">
            <label>Ladda upp bild</label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              id="imageUpload"
            ></input>
            <button onClick={uploadImage}>Ladda upp</button>
          </div>
          <div id="coverImage">
            <button onClick={() => pickImage("cover")}>Välj Cover</button>

            <button onClick={() => pickImage("icon")}>Välj ikon</button>
          </div>
          <img id="iconImage" src={squareUrl} alt="Ikon"></img>
        </div>

        <label>Plats</label>
        <div contentEditable id="AdminLocation">
          {postData.Location}
        </div>
      </div>
      {textContent}
      <button id="newText" onClick={newText}>
        Lägg till text
      </button>
      <div>
        <label>Pris</label>
        <div id="price" contentEditable>
          {postData.Price}
        </div>
      </div>

      <div id="bottom">
        <div>
          <label>Samarbete</label>
          <div contentEditable id="AdminCollab">
            {postData.Collaboration}
          </div>
        </div>
        <div>
          <label>Boknings anvisningar</label>
          <div contentEditable id="AdminBooking">
            {postData.Book}
          </div>
        </div>
        <div>
          <label>Länk</label>
          <div contentEditable id="Link">
            {postData.Link}
          </div>
        </div>
      </div>
    </>
  );
}

function newText(event) {
  let parent = event.target.parentElement;
  let div = document.createElement("div");
  div.classList.add("adminTextContent");
  div.contentEditable = true;
  parent.insertBefore(div, event.target);
  div.focus();
  div.addEventListener("focusout", () => textValid(div));
}

function textValid(div) {
  if (div.textContent === "") {
    div.remove();
  }
}

function uploadImage() {
  if (!document.getElementById("imageUpload").files[0]) {
    document.getElementById("fileUpload").firstChild.textContent =
      "Bilden gick inte att laddas upp!";
    return;
  }

  let input = document.getElementById("imageUpload").files[0];
  console.log(input);

  // Create a root reference
  const storage = getStorage();

  // // Create a reference to 'images/mountains.jpg'
  const storageImagesRef = ref(storage, input.name);

  uploadBytes(storageImagesRef, input).then((snapshot) => {
    console.log(input);

    document.getElementById("fileUpload").firstChild.textContent =
      "Bilden laddades upp!";
  });
}

async function pickImage(id) {
  const storage = getStorage();
  const listRef = ref(storage);
  const imgDiv = document.getElementById("imgDiv");
  const ul = document.querySelector("select");
  ul.innerHTML = "";
  await listAll(listRef).then((res) => {
    ul.id = id;
    res.items.forEach((itemRef) => {
      console.log(itemRef);
      const storageImagesRef = ref(storage, itemRef._location.path_);
      getDownloadURL(storageImagesRef).then((url) => {
        let li = document.createElement("option");
        li.style.backgroundImage = `url(${url})`;
        li.url = url;
        li.textContent = itemRef._location.path_;
        ul.append(li);
        imgDiv.style.backgroundImage = `url(${ul.selectedOptions[0].url})`;
      });
    });
    document.getElementById("window").classList.add("open");
  });
}

function changeDate(event) {
  console.log(
    new Date(event.target.value).toLocaleString("sv-SV", {
      timeZone: "CET",
    })
  );

  document.querySelector("#AdminDate > label").textContent =
    "Datum " +
    new Date(event.target.value).toLocaleString("sv-SV", {
      timeZone: "CET",
    });
}

function changeImage(event) {
  const imgDiv = document.getElementById("imgDiv");

  imgDiv.style.backgroundImage = `url(${event.target.selectedOptions[0].url})`;
}

function chooseImage() {
  const select = document.querySelector("select");
  const url = select.selectedOptions[0].url;
  const id = select.id;

  if (id === "cover") {
    document.querySelector("#top > img").src = url;
    console.log(document.querySelector("#top > img").src);
  } else {
    document.getElementById("iconImage").src = url;
    console.log(document.getElementById("iconImage").src);
  }
  closeWindow();
}

function closeWindow() {
  document.getElementById("window").classList.remove("open");
}

async function saveChanges() {
  const title = document.getElementById("title").textContent;

  const dateSeconds =
    new Date(document.getElementById("dateTime").value).getTime() / 1000;

  const cover = document.querySelector("#top > img").src;
  const icon = document.getElementById("iconImage").src;
  const collab = document.getElementById("AdminCollab").textContent;
  const book = document.getElementById("AdminBooking").textContent;
  const link = document.getElementById("Link").textContent;
  const location = document.getElementById("AdminLocation").textContent;
  const price = document.getElementById("price").textContent;
  const textContent = Array.from(
    document.querySelectorAll(".adminTextContent")
  ).map((div) => div.textContent);

  await setDoc(doc(db, "Events", postId), {
    Active: document.querySelector(".AdminSwitch > input").checked,
    Book: book,
    Collaboration: collab,
    CoverImage: cover,
    Date: { seconds: dateSeconds },
    Link: link,
    Location: location,
    Price: price,
    SquareImage: icon,
    TextContent: textContent,
    Title: title,
  });
}

export default AdminEvent;
