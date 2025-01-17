import AdminEventTeaser from "../components/AdminEventTeaser";
import db from "../db/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import "./Events_mobile.css";

const keysRef = query(collection(db, "Events"));
const postKeys = await getDocs(keysRef);

let events = [];
postKeys.forEach((doc) => {
  events.push({ id: doc.id, data: doc.data() });
});

function AdminEvents() {
  events.map(
    (event) =>
      (event.data.dateString = event.data.Date.seconds
        ? new Date(event.data.Date.seconds * 1000).getTime()
        : -Infinity)
  );

  events = events.sort((a, b) => a.data.dateString - b.data.dateString);
  events.reverse();

  return (
    <>
      {events.map((event) => (
        <AdminEventTeaser obj={event} />
      ))}
    </>
  );
}

export default AdminEvents;
