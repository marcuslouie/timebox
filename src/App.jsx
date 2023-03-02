import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Timeblocks from "./pages/Timeblocks";
import Login from "./pages/Login";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth loginPath="/login">
                <Home />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/notes/:date"
            element={
              <RequireAuth loginPath="/login">
                <Timeblocks />
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
