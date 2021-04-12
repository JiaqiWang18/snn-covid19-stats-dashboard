import React from "react";
import { connect } from "react-redux";
import { apiToDisplay } from "../utils";

const UnitedStatesDisplay = (props) => {
  const renderedDisplayCols = Object.keys(props.data).map((key) => {
    const show =
      props.data[key][1] <= 0 ? "invisible mr-2" : "mr-2  text-muted";
    return (
      <div className="col mb-3 lead" key={key}>
        <p className="text-center">
          <strong>{apiToDisplay(key)}</strong>
        </p>
        <div
          key={key}
          className="d-flex flex-column ml-auto align-items-center"
        >
          <p className="mr-2">{props.data[key][0].commarize()}</p>
          <p className={show}>{`+${String(props.data[key][1]).replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )}`}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-column">
      <p className="text-center mb-3 us-label text-muted my-4">United States</p>
      <div className="row">{renderedDisplayCols}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const target = state.displayData.data[state.displayData.date] || {};

  return {
    date: state.displayData.date,
    data: target["United States"] || {},
  };
};

export default connect(mapStateToProps)(UnitedStatesDisplay);
