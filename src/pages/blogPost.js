import React from "react";
import db from "../db/firebase";
import { getDoc, doc } from "firebase/firestore";

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("post");

const postRef = doc(db, "BlogPosts", postId);
let postData = await getDoc(postRef);
postData = postData.data();
console.log(postData);

function BlogPost() {
  return (
    <>
      <h1>Blog post</h1>
    </>
  );
}

export default BlogPost;
