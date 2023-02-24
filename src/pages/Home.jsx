import React from "react";
import Calendargen from "../components/Calendargen";
import Timeslot from "../components/Timeslot";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Calendargen></Calendargen>
      <Timeslot></Timeslot>
    </div>
  );
}

export default Home;
