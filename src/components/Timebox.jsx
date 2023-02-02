import { React } from "react";
import "./Timebox.css";
import Timeslot from "./Timeslot";

function Timebox({ date }) {
  return (
    <div>
      <h1>Timebox</h1>
      <table>
        <thead>
          <tr>
            <th key="Time">Time</th>
            <th key="00">:00</th>
            <th key="30">:30</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 19 }, (_, i) => (
            <tr>
              <td>{i + 5}</td>
              <td>
                <Timeslot uid={`${date}-${i + 5.0}`}></Timeslot>
              </td>
              <td>
                <Timeslot uid={`${date}-${i + 5.5}`}></Timeslot>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Timebox;
