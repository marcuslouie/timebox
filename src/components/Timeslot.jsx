import { React, useState, useEffect } from "react";
import "./Timebox.css";

function Timeslot({ uid, classValue = "" }) {
  const [inputValue, setInputValue] = useState("");

  function checkNotes() {
    const note = JSON.parse(localStorage.getItem(`timeslot-data-${uid}`));
    if (note) {
      return note;
    }
  }

  useEffect(() => {
    setInputValue(checkNotes);
  });

  function handleInputChange(event) {
    localStorage.setItem(
      `timeslot-data-${uid}`,
      JSON.stringify(event.target.value)
    );
    setInputValue(checkNotes);
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
