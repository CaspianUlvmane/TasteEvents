import React from "react";
import db from "../db/firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from "./Image";

const docRef = doc(db, "images", "square");
let docSnap = await getDoc(docRef);
let data = docSnap.data();

function Badge() {
  return (
    <div id="idContainer" class="open">
      <h1>Mrs Wolfmoon</h1>
      <div class="imageContainer">
        <Image url={data.image} alt="Anki Ulvmåne" />
        <div class="imageDropShadow"></div>
      </div>
    </div>
  );
}

export default Badge;
