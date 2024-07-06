import React from "react";
import db from "../db/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import BlogTeaser from "../components/blogTeaser";

const keysRef = query(collection(db, "BlogPosts"));
const postKeys = await getDocs(keysRef);

let blogPosts = [];
postKeys.forEach((doc) => {
  console.log(doc.id, doc.data());
  blogPosts.push({ id: doc.id, data: doc.data() });
});

function Blog() {
  console.log(blogPosts[0]);
  let post = blogPosts[0];
  console.log(post.id);
  return (
    <>
      <BlogTeaser obj={post} />
    </>
  );
}

export default Blog;
