import { React } from "react";
import { useParams } from "react-router-dom";
import "./Timeblocks.css";
import Timebox from "../components/Timebox";
import Calendargen from "../components/Calendargen";
import Note from "../components/Note";

function Timeblocks() {
  const { date } = useParams();

  return (
    <div>
      <h1>My Planner</h1>

      <div className="container">
        <div className="box">
          <div className="box-row">
            <div className="box-cell">
              <h2>{date}</h2>
              <Calendargen></Calendargen>
              <h2>Notes</h2>
              {/* Using a time slot component as a note field */}
              {/* <Timeslot uid={date} classValue="note" key={date}></Timeslot> */}
              <Note date={date}></Note>
            </div>
            <div className="box-cell">
              <Timebox date={date}></Timebox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeblocks;
