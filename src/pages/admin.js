import React from "react";
import valid from "../admin/valid";
import "./admin.css";
import AdminLogin from "../admin/adminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminEvents from "../admin/adminEvents";
import AdminEvent from "../admin/AdminEvent";

function Admin() {
  if (valid) {
    return (
      <>
        <Router>
          <Routes>
            <Route
              routerDirection="none"
              exact
              path="/Admin/*"
              Component={AdminEvents}
            >
              Events
            </Route>
            <Route
              routerDirection="none"
              path="/Admin/Blog/*"
              Component={AdminEvents}
            >
              Blog
            </Route>
            <Route path="/Admin/Event" Component={AdminEvent}></Route>
          </Routes>
        </Router>
      </>
    );
  } else {
    document.querySelector("body").id = "admin";
    return (
      <>
        <AdminLogin />
      </>
    );
  }
}

export default Admin;
