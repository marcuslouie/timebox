import { React, useState, useEffect } from "react";
import "./Timebox.css";

function Timeslot({ uid, classValue = "", fetchUrl, note }) {
  const [inputValue, setInputValue] = useState("");

  // async function fetchNotes() {
  //   let headers = new Headers();

  //   headers.append("Content-Type", "application/json");
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   const response = await fetch(fetchUrl, {
  //     method: "GET",
  //     headers: headers,
  //   }).catch((err) => console.error(err));
  //   response.json().then(function (result) {
  //     const jsonString = JSON.stringify(result);
  //     const note = JSON.parse(jsonString);

  //     return note;
  //   });
  // }
  // async function renderNote() {
  //   const renderedNote = await fetchNotes();
  //   console.log("quack " + renderedNote);
  // }
  // renderNote();
  // async function checkNotes() {
  // let headers = new Headers();
  // headers.append("Content-Type", "application/json");
  // headers.append("Access-Control-Allow-Origin", "*");
  // const response = await fetch(fetchUrl, {
  //   method: "GET",
  //   headers: headers,
  // }).catch((err) => console.error(err));
  // response.json().then(function (result) {
  //   const jsonString = JSON.stringify(result);
  //   const note = JSON.parse(jsonString);
  //   console.log(note);
  //   if ((note[`timeslot-data-${uid}`] ??= false)) {
  //     setInputValue(note[`timeslot-data-${uid}`]);
  //     return note[`timeslot-data-${uid}`];
  //   }
  // });
  // }

  function parseNote(note) {
    if (note[`timeslot-data-${uid}`] !== false) {
      setInputValue(note[`timeslot-data-${uid}`]);
      return note[`timeslot-data-${uid}`];
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

    fetch(`${fetchUrl}/timeslot-data-${uid}`, options).catch((err) =>
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
      onChange={(event) => {
        handleInputChange(event);
      }}
    />
  );
}

export default Timeslot;
