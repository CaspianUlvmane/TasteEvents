import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Blog from "./pages/blog";
import Events from "./pages/events";
import Contact from "./pages/contact";
import BlogPost from "./pages/blogPost";
import Event from "./pages/Event";
import "./App.css";
import "./App_mobile.css";

let scroll = 0;
window.addEventListener("scroll", (event) => {
  let previous = scroll + 5;
  scroll = window.scrollY;
  console.log(scroll);

  if (scroll > 200) {
    document.getElementById("burger").classList.add("closed");
  }
  if (previous > scroll + 6) {
    document.getElementById("burger").classList.remove("closed");
  }
});

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route routerDirection="none" exact path="/" Component={Home}>
            Hem
          </Route>
          <Route routerDirection="none" path="/Blog/*" Component={Blog}>
            Blog
          </Route>
          <Route routerDirection="none" path="/Events/*" Component={Events}>
            Event
          </Route>
          <Route routerDirection="none" path="/Contact" Component={Contact}>
            Kontakt
          </Route>
          <Route path="/BlogPost" Component={BlogPost}></Route>
          <Route path="/Event" Component={Event}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
