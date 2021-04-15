import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range";
import { connect } from "react-redux";

import { fetchDisplay } from "../actions";
import { formatDisplayDate, formatAPIDate } from "../utils";

const DatePicker = ({ fetchDisplay }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => fetchDisplay(formatAPIDate(date)), [date, fetchDisplay]);

  return (
    <div className={`dropdown ${open ? "show" : ""}`}>
      <button
        className="btn text-muted"
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
          maxDate={new Date()}
          minDate={new Date("2020-07-01")}
          date={date}
        />
      </div>
    </div>
  );
};

export default connect(null, {
  fetchDisplay,
})(DatePicker);
