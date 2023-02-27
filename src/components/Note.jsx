import { React, useState, useEffect } from "react";

function Note({ date, fetchUrl }) {
  const [note, setNote] = useState("");

  async function checkNotes() {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: headers,
    });
    response
      .json()
      .then(function (result) {
        const jsonString = JSON.stringify(result);
        const note = JSON.parse(jsonString);

        if ((note[`note-data-${date}`] ??= false)) {
          setNote(note[`note-data-${date}`]);
          return note[`note-data-${date}`];
        }
      })
      .catch(() => console.log()); //swallow exception to as we render the JSON as a string on purpose
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

    fetch(`${fetchUrl}/note-data-${date}`, options).catch((err) =>
      console.error(err)
    );

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
