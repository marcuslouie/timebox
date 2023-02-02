import React from "react";
import Timebox from "../components/Timebox";
import Calendargen from "../components/Calendargen";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Calendargen></Calendargen>
      <Timebox date="today"></Timebox>
    </div>
  );
}

export default Home;
