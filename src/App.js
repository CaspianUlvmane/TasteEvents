import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Blog from "./pages/blog";
import Events from "./pages/events";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route routerDirection="none" exact path="/" Component={Home}>
            Hem
          </Route>
          <Route routerDirection="none" path="/Blog" Component={Blog}>
            Blog
          </Route>
          <Route routerDirection="none" path="/Events" Component={Events}>
            Event
          </Route>
          <Route routerDirection="none" path="/Contact" Component={Contact}>
            Kontakt
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
