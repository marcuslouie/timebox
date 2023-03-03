import React from "react";
import Calendargen from "../components/Calendargen";
import Signout from "../components/Signout";
import "./Timeblocks.css";

function Home() {
  return (
    <div className="wholesite-wrapper">
      <Signout></Signout>
      <h1 className="header">HOME</h1>
      <div className="center" style={{ top: "70%" }}>
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
