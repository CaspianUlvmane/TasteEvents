import React from "react";
import Image from "./Image";
import "./blogTeaser.css";

function BlogTeaser(obj) {
  console.log(obj);
  let object = obj.obj;
  if (object.data.Images[0] === undefined) {
    return;
  } else
    return (
      <>
        <div
          id={object.id}
          onClick={() => {
            window.location = "/BlogPost?post=" + object.id;
          }}
          className="blogTeaser"
        >
          <div className="imageContainer">
            <Image url={object.data.Images[0]} alt={object.data.Title} />
            <div className="imageDropShadow"></div>
          </div>
          <div className="blogTeaserText">
            <h2>{object.data.Title}</h2>
            <p>{object.data.TextContent[0]}</p>
          </div>
        </div>
      </>
    );
}

export default BlogTeaser;
