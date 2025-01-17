import React from "react";
import db from "../db/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import valid from "../admin/valid";
import "./admin.css";
import AdminLogin from "../admin/adminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminEvents from "../admin/adminEvents";
import Event from "./Event";

function Admin() {
  if (valid) {
    return (
      <>
        <Router>
          <Routes>
            <Route
              routerDirection="none"
              exact
              path="/Admin"
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
            <Route path="/Event" Component={Event}></Route>
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
