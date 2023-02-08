import { React, useState, useEffect } from "react";

function Note({ date }) {
  const [note, setNote] = useState("");

  function checkNotes() {
    const text = JSON.parse(localStorage.getItem(`note-data-${date}`));
    if (text) {
      return text;
    }
  }

  useEffect(() => {
    setNote(checkNotes);
  });

  function handleInputChange(event) {
    localStorage.setItem(
      `note-data-${date}`,
      JSON.stringify(event.target.value)
    );
    setNote(checkNotes);
  }

  return (
    <textarea
      name="note"
      id={`note-data-${date}`}
      cols="40"
      rows="12"
      onChange={(event) => {
        handleInputChange(event);
      }}
      defaultValue={note}
    ></textarea>
  );
}

export default Note;
