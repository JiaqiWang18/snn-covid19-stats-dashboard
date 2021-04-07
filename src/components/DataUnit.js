import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { apiToDisplay } from "../utils";
const DataUnit = (props) => {
  return (
    <div className="bg-white d-flex flex-column align-items-center">
      <p className="h5 mt-3">Hi</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const target = state.displayData.data[state.displayData.date] || {};

  return {
    date: state.displayData.date,
    cityData: target[ownProps.location] || {},
  };
};

export default connect(mapStateToProps)(DataUnit);
