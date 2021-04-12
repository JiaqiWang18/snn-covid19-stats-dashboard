import React from "react";
import { connect } from "react-redux";
import { apiToDisplay } from "../utils";
import Loader from "./Loader";
const CityList = (props) => {
  const renderedOptions = Object.keys(props.cityData).map((key) => {
    const show =
      props.cityData[key][1] <= 0 ? "invisible mr-2" : "mr-2  text-muted";
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
      {props.fetching ? (
        <Loader />
      ) : (
        <>
          <p className="h5 mt-3">Orange County Cities</p>
          <p className="text-muted">{props.date.replaceAll("-", "/")}</p>
          <div className="d-flex flex-column city-list border-top">
            {renderedOptions}
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const target = state.displayData.data[state.displayData.date] || {};

  return {
    date: state.displayData.date,
    cityData: target["Orange County Cities"] || {},
    fetching: state.displayData.fetching,
  };
};

export default connect(mapStateToProps)(CityList);
