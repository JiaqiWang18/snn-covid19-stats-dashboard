import React from "react";
import { connect } from "react-redux";
import { apiToDisplay } from "../utils";

const CountyDisplay = (props) => {
  const renderedDisplayCols = Object.keys(props.data).map((key) => {
    const show = props.data[key][1] <= 0 ? "display-none" : "mx-2 text-muted";
    return (
      <div className="col mb-3 county-text" key={key}>
        <p className="text-center">
          <strong>{apiToDisplay(key)}</strong>
        </p>
        <div
          key={key}
          className="d-flex flex-row ml-auto justify-content-center"
        >
          <p className="mr-1">{props.data[key][0].commarize()}</p>
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
      <p className="text-center text-muted my-1">{props.location}</p>
      <div className="row">{renderedDisplayCols}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const target = state.displayData.data[state.displayData.date] || {};
  return {
    date: state.displayData.date,
    data: target[ownProps.location] || {},
  };
};

export default connect(mapStateToProps)(CountyDisplay);
