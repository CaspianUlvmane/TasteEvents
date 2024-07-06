import React from "react";
import db from "../db/firebase";
import { getDoc, doc } from "firebase/firestore";
import "./blogPost.css";
import Image from "../components/Image";
import BackArrow from "../components/Back";

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("post");
let postData;
if (postId) {
  const postRef = doc(db, "BlogPosts", postId);
  postData = await getDoc(postRef);
  postData = postData.data();
} else {
}

function BlogPost() {
  console.log(postData);
  let textContent = [];
  postData.TextContent.forEach((element) => {
    textContent.push(<p>{element}</p>);
  });

  return (
    <>
      <h1 id="postHeader">{postData.Title}</h1>
      <div
        className="back"
        onClick={() => {
          window.location = "/Blog";
        }}
      >
        <BackArrow />
      </div>
      <div id="postContent">
        <div className="imageContainer">
          <Image url={postData.Images[0]} />
          <div className="imageDropShadow"></div>
        </div>
        <div className="textContent">{textContent}</div>
      </div>
    </>
  );
}

export default BlogPost;
