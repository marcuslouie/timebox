import { React } from "react";
import { useParams } from "react-router-dom";
import Timebox from "../components/Timebox";
import Calendargen from "../components/Calendargen";
import Timeslot from "../components/Timeslot";

function Timeblocks() {
  const { date } = useParams();

  return (
    <div>
      <h1>Timeblocks</h1>
      <h3>{date}</h3>
      <Calendargen></Calendargen>
      <Timeslot uid={date} key={date}></Timeslot>
      <Timebox date={date}></Timebox>
    </div>
  );
}

export default Timeblocks;
