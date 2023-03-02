import { React, useState, useEffect } from "react";
import "./Timebox.css";

function Timeslot({ uid, classValue = "", fetchUrl, note, user }) {
  const [inputValue, setInputValue] = useState("");

  function parseNote(note) {
    if (note[`timeslot-data-${uid}-${user}`] !== false) {
      setInputValue(note[`timeslot-data-${uid}-${user}`]);
      return note[`timeslot-data-${uid}-${user}`];
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (note !== undefined) {
        await parseNote(note);
      }
    }
    fetchData();
  }, [note]);

  async function handleInputChange(event) {
    //On input change post the new change to server side json file
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"logo":"${event.target.value}"}`,
    };

    fetch(`${fetchUrl}/timeslot-data-${uid}-${user}`, options).catch((err) =>
      console.error(err)
    );

    console.log("handled input change");
  }

  return (
    <input
      className={String(classValue)}
      type="text"
      key={String(uid)}
      defaultValue={inputValue}
      onBlur={(event) => {
        console.log("triggered");
        handleInputChange(event);
      }}
    />
  );
}

export default Timeslot;
