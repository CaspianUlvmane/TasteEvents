import EventTeaser from "../components/EventTeaser";
import db from "../db/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import "./Events_mobile.css";
import { Helmet } from "react-helmet";

const keysRef = query(collection(db, "Events"));
const postKeys = await getDocs(keysRef);

let events = [];
postKeys.forEach((doc) => {
  if (doc.data().Active) events.push({ id: doc.id, data: doc.data() });
});

function Events() {
  events.map(
    (event) =>
      (event.data.dateSeconds = event.data.Date.seconds
        ? new Date(event.data.Date.seconds * 1000).getTime()
        : -Infinity)
  );

  events = events.sort((a, b) => a.data.dateSeconds - b.data.dateSeconds);

  return (
    <>
      <Helmet>
        <title>Event | Taste Events by Wolfmoon</title>
        <meta
          name="description"
          content="Upptäck kommande smakupplevelser och event arrangerade av Taste Events by Wolfmoon."
        />
        <meta
          name="keywords"
          content="events, tastings, whisky, gin, taste events by wolfmoon, taste events, tasting events"
        />
      </Helmet>
      {events.map((event) => (
        <EventTeaser obj={event} />
      ))}
    </>
  );
}

export default Events;
