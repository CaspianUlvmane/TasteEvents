import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG5NVnqbP-TOsZOGIL-cqZ5UmPGfP1AJA",
  authDomain: "tasteevents.firebaseapp.com",
  projectId: "tasteevents",
  storageBucket: "tasteevents.appspot.com",
  messagingSenderId: "236765595740",
  appId: "1:236765595740:web:db0f7fe99fe187e8cafe99",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
