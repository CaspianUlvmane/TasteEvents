import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Blog from "./pages/blog";
import Events from "./pages/events";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/index" element={<Home />}>
            Hem
          </Route>
          <Route exact path="/Blog" element={<Blog />}>
            Blog
          </Route>
          <Route exact path="/Events" element={<Events />}>
            Event
          </Route>
          <Route exact path="/Contact" element={<Contact />}>
            Kontakt
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
