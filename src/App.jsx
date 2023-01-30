import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Timeblocks from "./pages/Timeblocks";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/notes/:date" element={<Timeblocks />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
