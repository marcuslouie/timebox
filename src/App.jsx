import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/users/:id" element={<Users />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
