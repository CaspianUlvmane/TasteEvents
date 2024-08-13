import EventTeaser from "../components/EventTeaser";
import db from "../db/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import "./Events_mobile.css";

const keysRef = query(collection(db, "Events"));
const postKeys = await getDocs(keysRef);

let events = [];
postKeys.forEach((doc) => {
  events.push({ id: doc.id, data: doc.data() });
});

function Events() {
  events.sort((a, b) => b.data.Date.seconds - a.data.Date.seconds);
  return (
    <>
      {events.map((event) => (
        <EventTeaser obj={event} />
      ))}
    </>
  );
}

export default Events;
