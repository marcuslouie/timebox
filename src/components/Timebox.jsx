import React from "react";
import "./Timebox.css";

function Timebox() {
  function textInput() {
    return (
      <input
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
    );
  }
  return (
    <div>
      <section></section>
      <h1>Timebox</h1>
      <section></section>
      <table>
        <tr>
          <th>Time</th>
          <th>:00</th>
          <th>:30</th>
        </tr>
        {Array.from({ length: 8 }, (_, i) => (
          <tr>
            <td>{`${i + 5}`}</td>
            <td>{textInput()}</td>
            <td>{textInput()}</td>
          </tr>
        ))}
        {Array.from({ length: 11 }, (_, i) => (
          <tr>
            <td>{`${i + 1}`}</td>
            <td class="time">
              <input type="text" />
            </td>
            <td class="time">
              <input type="text" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Timebox;
