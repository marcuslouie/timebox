import { React, useState, useEffect } from "react";

function Note({ date, fetchUrl }) {
  const [note, setNote] = useState("");

  //Function retrieves data stored in browser cookies
  function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    var usernameString = JSON.stringify(b ? b.pop() : "");
    usernameString = usernameString.replace(/%22/g, "");
    return usernameString;
  }

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

        if ((note[`note-data-${date}-${user}`] ??= false)) {
          setNote(note[`note-data-${date}-${user}`]);
          return note[`note-data-${date}-${user}`];
        }
      })
      .catch(() => console.log()); //swallow exception to as we render the JSON as a string on purpose
  }

  useEffect(() => {
    checkNotes();
  });
  const user = getCookie("_auth_state");

  async function handleInputChange(event) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"logo":${JSON.stringify(event.target.value)}}`,
    };

    fetch(`${fetchUrl}/note-data-${date}-${user}`, options).catch((err) =>
      console.error(err)
    );

    console.log("handled input change");
  }

  return (
    <textarea
      style={{
        "font-weight": "550",
        "letter-spacing": "0.05em",
        border: "none",
        outline: "none",
        borderRadius: "10px",
      }}
      name="note"
      id={`note-data-${date}-${user}`}
      cols="40"
      rows="12"
      onBlur={(event) => {
        handleInputChange(event);
      }}
      defaultValue={note}
    ></textarea>
  );
}

export default Note;
