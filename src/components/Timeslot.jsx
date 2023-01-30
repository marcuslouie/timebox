import { React } from "react";

function Timeslot({ uid }) {
  return (
    <input
      type="text"
      defaultValue={JSON.parse(localStorage.getItem(`timeslot-data-${uid}`))}
      onChange={(event) => {
        localStorage.setItem(
          `timeslot-data-${uid}`,
          JSON.stringify(event.target.value)
        );
      }}
    />
  );
}

export default Timeslot;
