import { React, useState, useEffect } from "react";

function Note({ date }) {
  const [note, setNote] = useState("");

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

      if ((note[`note-data-${date}`] ??= false)) {
        setNote(note[`note-data-${date}`]);
        return note[`note-data-${date}`];
      }
    });
  }

  useEffect(() => {
    checkNotes();
  });

  async function handleInputChange(event) {
    console.log(JSON.parse(JSON.stringify(event.target.value)));
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"logo":${JSON.stringify(event.target.value)}}`,
    };

    fetch(`http://localhost:8080/timeslot/note-data-${date}`, options)
      .then((response) => response.json())
      .then(setNote(checkNotes))
      .catch((err) => console.error(err));

    console.log("handled input change");
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
