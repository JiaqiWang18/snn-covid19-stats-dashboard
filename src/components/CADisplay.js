import React from "react";
import { connect } from "react-redux";
import { apiToDisplay } from "../utils";

const CADisplay = (props) => {
  const renderedDisplayCols = Object.keys(props.data).map((key) => {
    const show = props.data[key][1] <= 0 ? "display-none" : "mx-2 text-muted";
    return (
      <div className="col mb-3" key={key}>
        <p className="text-center">
          <strong>{apiToDisplay(key)}</strong>
        </p>
        <div
          key={key}
          className="d-flex flex-row ml-auto justify-content-center"
        >
          <p>{props.data[key][0].commarize()}</p>
          <p className={show}>{`+${String(props.data[key][1]).replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )}`}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-column align-items-center bg-white ca-flex mb-2">
      <p className="text-center mt-1 mb-1 text-muted lead">California</p>
      <div className="row w-75">{renderedDisplayCols}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const target = state.displayData.data[state.displayData.date] || {};

  return {
    date: state.displayData.date,
    data: target["California"] || {},
  };
};

export default connect(mapStateToProps)(CADisplay);
