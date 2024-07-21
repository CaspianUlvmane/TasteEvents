import Image from "./Image";
import "./EventTeaser.css";

function EventTeaser({ obj }) {
  console.log(obj);
  let date = new Date(obj.data.Date.seconds * 1000).toDateString();

  return (
    <>
      <div
        id={obj.id}
        className="eventContainer"
        onClick={() => {
          window.location = "/Event?event=" + obj.id;
        }}
      >
        <div className="imageContainer">
          <Image url={obj.data.Images[0]} alt={obj.data.Title} />
          <div className="imageDropShadow"></div>
        </div>
        <div className="textContent">
          <h2>{obj.data.Title}</h2>
          <p className="date">{date}</p>
          <p className="location">{obj.data.Location}</p>
        </div>
      </div>
    </>
  );
}

export default EventTeaser;
