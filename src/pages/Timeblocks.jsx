import { React } from "react";
import { useParams } from "react-router-dom";
import Timebox from "../components/Timebox";

function Timeblocks() {
  const { date } = useParams();

  return (
    <div>
      <h1>Timeblocks</h1>
      <h3>{date}</h3>
      <Timebox></Timebox>
    </div>
  );
}

export default Timeblocks;
