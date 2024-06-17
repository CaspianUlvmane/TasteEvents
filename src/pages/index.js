import db from "../db/firebase";
import { doc, getDoc } from "firebase/firestore";
import "./Home.css";

const docRef = doc(db, "images", "square");
let docSnap = await getDoc(docRef);
let data = docSnap.data();

const textRef = doc(db, "Home", "Content");
let textSnap = await getDoc(textRef);
let textData = textSnap.data();
console.log(textData);

function homeContent() {
  let list = [];
  for (let text of textData.Text) {
    let element = <div>{text}</div>;
    list.push(element);
  }
  return list;
}

function Home() {
  return (
    <>
      <div id="idContainer">
        <h1>Mrs Wolfmoon</h1>
        <div class="imageContainer">
          <img src={data.image}></img>
          <div class="imageDropShadow"></div>
        </div>
      </div>
      <div id="content">{homeContent()}</div>
    </>
  );
}

export default Home;
