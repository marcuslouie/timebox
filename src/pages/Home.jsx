import React from "react";
import Calendargen from "../components/Calendargen";
import Signout from "../components/Signout";
import "./Timeblocks.css";

function Home() {
  return (
    <div className="wholesite-wrapper">
      <Signout></Signout>
      <h1 style={{ margin: 0, padding: "2vh" }}>Home</h1>
      <div className="center">
        <div className="container">
          <div className="box">
            {/* <Loader></Loader> */}
            <Calendargen></Calendargen>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
