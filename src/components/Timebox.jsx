import { React, useState, useEffect } from "react";
import "./Timebox.css";
import Timeslot from "./Timeslot";
import Loader from "./Loader";

function Timebox({ date, fetchUrl }) {
  // Show loader until data is populated
  const [showLoader, setShowLoader] = useState(true);

  const [note, setNote] = useState();
  // console.log("timebox rendered");

  //load the stored response json ONCE!
  async function checkNotes() {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: headers,
    }).catch((err) => console.error(err));

    response
      .json()
      .then(function (result) {
        const jsonString = JSON.stringify(result);
        const note = JSON.parse(jsonString);
        setNote(note);
      })
      .catch(() => console.log()); //swallow exception to as we render the JSON as a string on purpose;
  }

  useEffect(() => {
    async function fetchData() {
      await checkNotes();
      setShowLoader(false);
    }
    fetchData();
  }, [fetchUrl, date]);

  //Function retrieves data stored in browser cookies
  function getCookie(key) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    var usernameString = JSON.stringify(b ? b.pop() : "");
    usernameString = usernameString.replace(/%22/g, "");
    return usernameString;
  }

  return (
    <div>
      <div className="circle">
        <h2 className="text">Timebox</h2>
      </div>

      {showLoader && <Loader></Loader>}
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
                  fetchUrl={fetchUrl}
                  note={note}
                  uid={`${date}-${i + 5.0}`}
                  key={`${date}-${i + 5.0}`}
                  user={getCookie("_auth_state")}
                ></Timeslot>
              </td>
              <td>
                <Timeslot
                  fetchUrl={fetchUrl}
                  note={note}
                  uid={`${date}-${i + 5.5}`}
                  key={`${date}-${i + 5.0}`}
                  user={getCookie("_auth_state")}
                ></Timeslot>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Timebox;
