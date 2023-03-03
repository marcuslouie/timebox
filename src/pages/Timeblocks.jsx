import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Timeblocks.css";
import Timebox from "../components/Timebox";
import Calendargen from "../components/Calendargen";
import Note from "../components/Note";
import Signout from "../components/Signout";
import Loader from "../components/Loader";

function Timeblocks() {
  const [showLoader, setShowLoader] = useState(true);
  const { date } = useParams();

  //Grab the client ip so we know what url to fetch when trying to get note data
  const [ip, setIp] = useState();

  const printIp = () => {
    //check the client ip
    var getIp = fetch("https://api.ipify.org/?", {
      method: "GET",
    })
      .then((response) => response.text())
      .then((response) => {
        return response;
      });
    getIp.then((userIp) => {
      if (userIp === "104.205.126.158") {
        //if ip is local use lan ip to fetch data
        console.log("local");
        setIp("http://192.168.1.67:8082/timeslot");
      } else {
        //if ip is outside lan use wan ip to fetch data
        console.log("wan");
        setIp("http://104.205.126.158:8082/timeslot");
      }
    });
  };

  useEffect(() => {
    async function fetchData() {
      await printIp();
      setShowLoader(false);
    }
    fetchData();
  }, []);

  return (
    <div className="wholesite-wrapper">
      {showLoader && <Loader></Loader>}
      <Signout></Signout>

      {/* <h1 className="header">PLANNER</h1> */}
      <div className="center">
        <div className="container">
          <div className="box">
            <div className="box-row">
              <div className="box-cell">
                <h2 className="title" style={{ width: "60%" }}>
                  {date}
                </h2>
                <Calendargen></Calendargen>
                <h2 className="title">Notes</h2>
                <Note
                  date={date}
                  key={`note-data-${date}`}
                  fetchUrl={ip}
                ></Note>
              </div>
              <div className="box-cell2">
                <Timebox date={date} fetchUrl={ip}></Timebox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeblocks;
