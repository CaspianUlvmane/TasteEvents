import EventTeaser from "../components/EventTeaser";
import db from "../db/firebase";
import { collection, getDocs, query } from "firebase/firestore";

const keysRef = query(collection(db, "Events"));
const postKeys = await getDocs(keysRef);

let events = [];
postKeys.forEach((doc) => {
  events.push({ id: doc.id, data: doc.data() });
});

function Events() {
  let event = events[0];

  return (
    <>
      <EventTeaser obj={event} />
    </>
  );
}

export default Events;
