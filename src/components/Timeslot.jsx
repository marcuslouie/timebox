import { React, useState, useEffect } from "react";
import "./Timebox.css";

function Timeslot({ uid, classValue = "" }) {
  const [inputValue, setInputValue] = useState("");

  async function checkNotes() {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    const response = await fetch("http://localhost:8080/timeslot", {
      method: "GET",
      headers: headers,
    });
    response.json().then(function (result) {
      const jsonString = JSON.stringify(result);
      const note = JSON.parse(jsonString);

      if ((note[`timeslot-data-${uid}`] ??= false)) {
        setInputValue(note[`timeslot-data-${uid}`]);
        return note[`timeslot-data-${uid}`];
      }
    });
  }

  useEffect(() => {
    checkNotes();
  });

  async function handleInputChange(event) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"logo":"${event.target.value}"}`,
    };

    fetch(`http://localhost:8080/timeslot/timeslot-data-${uid}`, options)
      .then((response) => response.json())
      .then(setInputValue(checkNotes))
      .catch((err) => console.error(err));

    console.log("handled input change");
  }

  return (
    <input
      className={String(classValue)}
      type="text"
      key={String(uid)}
      defaultValue={inputValue}
      onChange={(event) => {
        handleInputChange(event);
      }}
    />
  );
}

export default Timeslot;
