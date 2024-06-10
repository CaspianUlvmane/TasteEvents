import logo from "./logo.svg";
import "./App.css";
import {initializeApp} from 'firebase/app'
import { getFirestore, collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAG5NVnqbP-TOsZOGIL-cqZ5UmPGfP1AJA",
  authDomain: "tasteevents.firebaseapp.com",
  projectId: "tasteevents",
  storageBucket: "tasteevents.appspot.com",
  messagingSenderId: "236765595740",
  appId: "1:236765595740:web:db0f7fe99fe187e8cafe99"
};

const FirebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(FirebaseApp)

async function getBlogPosts(){

  const respons = await getDocs(collection(db, "BlogPosts"))
  respons.forEach(async (docy) => {
    console.log(`${docy.id} => ${docy}`);
    let docRef = doc(db, "BlogPosts", docy.id)

    const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			console.log('Document data:', docSnap.data());
			return docSnap.data();
  }})
}
getBlogPosts()
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World XD <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
