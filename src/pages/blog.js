import React from "react";
import db from "../db/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import BlogTeaser from "../components/blogTeaser";

const keysRef = query(collection(db, "BlogPosts"));
const postKeys = await getDocs(keysRef);

let blogPosts = [];
postKeys.forEach((doc) => {
  blogPosts.push({ id: doc.id, data: doc.data() });
});

function Blog() {
  let post = blogPosts[0];

  return (
    <>
      <BlogTeaser obj={post} />
    </>
  );
}

export default Blog;
