import { React } from "react";
import { useParams } from "react-router-dom";
import Timebox from "../components/Timebox";
import Calendargen from "../components/Calendargen";

function Timeblocks() {
  const { date } = useParams();

  return (
    <div>
      <h1>Timeblocks</h1>
      <h3>{date}</h3>
      <Calendargen></Calendargen>
      <Timebox date={date}></Timebox>
    </div>
  );
}

export default Timeblocks;
