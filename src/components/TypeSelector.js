import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { changeGraphMetricType } from "../actions";

const options = [
  {
    label: "Total Cases",
    value: "total_cases",
  },
  {
    label: "Deaths",
    value: "death",
  },
  {
    label: "Recovered",
    value: "recovered",
  },
];

const TypeSelector = (props) => {
  const [selected, setSelected] = useState(options[0]);
  useEffect(() => {
    props.changeGraphMetricType(selected.value);
  }, [selected]);

  const renderedOptions = options.map((option) => {
    //hide item that is already selected
    if (option.value === selected.value) return null;

    return (
      <a
        className="dropdown-item"
        key={option.value}
        onClick={() => setSelected(option)}
      >
        {option.label}
      </a>
    );
  });

  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn text-muted"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {selected.label}
      </button>
      <div className="dropdown-menu">{renderedOptions}</div>
    </div>
  );
};

export default connect(null, {
  changeGraphMetricType,
})(TypeSelector);
