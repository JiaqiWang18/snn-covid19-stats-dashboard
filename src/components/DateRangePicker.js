import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { connect } from "react-redux";

import { fetchGraph } from "../actions";
import { setDays, formatDisplayDate, formatAPIDate } from "../utils";

const DateRangePicker = (props) => {
  const defaultEndDate = new Date();
  const defaultStartDate = setDays(defaultEndDate, -31);

  const [open, setOpen] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: defaultStartDate,
      endDate: defaultEndDate,
      key: "selection",
    },
  ]);

  useEffect(() => handleApplyClick(), []);

  const handleApplyClick = () => {
    setOpen(false);
    const { startDate, endDate } = dateRange[0];

    props.fetchGraph(formatAPIDate(startDate), formatAPIDate(endDate));
  };

  return (
    <div className={`dropdown ${open ? "show" : ""}`}>
      <button
        className="btn"
        type="button"
        id="dropdownMenuButton"
        onClick={() => setOpen(!open)}
      >
        {`${formatDisplayDate(dateRange[0].startDate)} - ${formatDisplayDate(
          dateRange[0].endDate
        )}`}
      </button>
      <div className={`dropdown-menu ${open ? "show" : ""}`}>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDateRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
        />
        <button type="button" className="btn" onClick={handleApplyClick}>
          Apply
        </button>
        <button type="button" className="btn" onClick={() => setOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default connect(null, {
  fetchGraph,
})(DateRangePicker);
