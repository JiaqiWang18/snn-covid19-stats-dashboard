import React from "react";
import DatePicker from "./DatePicker";

export default () => {
  return (
    <div className="bg-white">
      <div className="d-flex flex-row justify-content-start border-bottom">
        <p className="btn dummy-btn lead">Select Date:</p>
        <DatePicker />
      </div>
      <div className="row mx-3 pb-4">
        <div className="col-md-3 border-bottom">
          <DataUnit location="United States" />
        </div>
        <div className="col-md-3 border-bottom">
          <DataUnit location="United States" />
        </div>
        <div className="col-md-3 border-bottom">
          <DataUnit location="United States" />
        </div>
        <div className="col-md-3 border-bottom">
          <DataUnit location="United States" />
        </div>
      </div>
    </div>
  );
};
