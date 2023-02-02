import { React, useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

function Calendargen() {
  const navigate = useNavigate();
  function handleClick(date) {
    const day = date.toISOString().split("T")[0];
    navigate(`/notes/${day}`);
  }

  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={(day) => handleClick(day)}

        //
      />
    </div>
  );
}

export default Calendargen;
