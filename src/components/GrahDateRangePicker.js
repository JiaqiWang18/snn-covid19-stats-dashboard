import React, { useState, useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { connect } from "react-redux";

import { changeGraphDates } from "../actions";
import { setDays, formatDisplayDate, formatAPIDate } from "../utils";

const GrahDateRangePicker = (props) => {
  const defaultEndDate = new Date();
  const defaultStartDate = setDays(defaultEndDate, -62);

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
    props.changeGraphDates(formatAPIDate(startDate), formatAPIDate(endDate));
  };

  return (
    <div className={`dropdown ${open ? "show" : ""}`}>
      <button
        className="btn text-muted"
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
          moveRangeOnFirstSelection={true}
          ranges={dateRange}
          maxDate={new Date()}
          minDate={new Date("2020-07-01")}
          direction="vertical"
          months={2}
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
  changeGraphDates,
})(GrahDateRangePicker);
