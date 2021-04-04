import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { connect } from "react-redux";

import { fetchDisplay } from "../actions";
import { formatDisplayDate, formatAPIDate } from "../utils";

const DatePicker = (props) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => props.fetchDisplay(formatAPIDate(date)), [date]);

  return (
    <div className={`dropdown ${open ? "show" : ""}`}>
      <button
        className="btn"
        type="button"
        id="dropdownMenuButton"
        onClick={() => setOpen(!open)}
      >
        {formatDisplayDate(date)}
      </button>
      <div className={`dropdown-menu ${open ? "show" : ""}`}>
        <Calendar
          onChange={(item) => {
            setDate(item);
            setOpen(false);
          }}
          date={date}
        />
      </div>
    </div>
  );
};

export default connect(null, {
  fetchDisplay,
})(DatePicker);
