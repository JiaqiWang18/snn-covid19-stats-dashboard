import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { formatDisplayDate, apiToDisplay } from "../utils";
const CityList = (props) => {
  const renderedOptions = Object.keys(props.cityData).map((key) => {
    //hide item that is already selected
    const show = props.cityData[key][1] === 0 ? "invisible mr-2" : "mr-2";
    return (
      <div key={key} className="d-flex flex-row">
        <p>{apiToDisplay(key)}</p>
        <div key={key} className="d-flex flex-row ml-auto">
          <p className="mr-2">{props.cityData[key][0]}</p>
          <p className={show}>{`+${props.cityData[key][1]}`}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-white d-flex flex-column align-items-center">
      <p className="h4 mt-3">Orange County Cities</p>
      <p className="text-muted">Cases for {props.date}</p>
      <div className="d-flex flex-column city-list">{renderedOptions}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const target = state.displayData.data[formatDisplayDate(new Date())];
  if (!target) return { cityData: {} };

  return {
    date: state.displayData.date,
    cityData: target["Orange County Cities"],
  };
};

export default connect(mapStateToProps)(CityList);
