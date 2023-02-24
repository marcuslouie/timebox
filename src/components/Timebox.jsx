import { React } from "react";
import "./Timebox.css";
import Timeslot from "./Timeslot";

function Timebox({ date }) {
  return (
    <>
      <h2>Timebox</h2>
      <table>
        <thead>
          <tr key="headers">
            <th key="Time">Time</th>
            <th key="00">:00</th>
            <th key="30">:30</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 19 }, (_, i) => (
            <tr key={`row-${date}-${i + 5.0}`}>
              <td>{i + 5}</td>
              <td>
                <Timeslot
                  uid={`${date}-${i + 5.0}`}
                  key={`${date}-${i + 5.0}`}
                ></Timeslot>
              </td>
              <td>
                <Timeslot
                  uid={`${date}-${i + 5.5}`}
                  key={`${date}-${i + 5.0}`}
                ></Timeslot>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Timebox;
