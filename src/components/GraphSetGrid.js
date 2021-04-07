import React from "react";
import TypeSelector from "./TypeSelector";
import GrahDateRangePicker from "./GrahDateRangePicker";
import TotalCasesGraph from "./TotalCasesGraph";
import DailyIncreaseGraph from "./DailyIncreaseGraph";

export default () => {
  return (
    <div className="bg-white">
      <div className="d-flex flex-row justify-content-start my-3 border-bottom">
        <p className="btn dummy-btn lead">Date Range:</p>
        <GrahDateRangePicker />
        <p className="btn dummy-btn lead">Metric Type:</p>
        <TypeSelector />
      </div>
      <div className="row mx-3 pb-4">
        <div className="col-md-3 border-bottom">
          <TotalCasesGraph location="us" color="rgb(65,192,192)" />
          <DailyIncreaseGraph location="us" color="rgb(65,192,192)" />
          <br />
        </div>
        <div className="col-md-3 border-bottom">
          <TotalCasesGraph location="ca" color="rgb(235,52,52)" />
          <DailyIncreaseGraph location="ca" color="rgb(235,52,52)" />
        </div>
        <div className="col-md-3 border-bottom">
          <TotalCasesGraph location="la" color="rgb(76,235,52)" />
          <DailyIncreaseGraph location="la" color="rgb(76,235,52)" />
        </div>
        <div className="col-md-3 border-bottom">
          <TotalCasesGraph location="oc" color="rgb(201,52,235)" />
          <DailyIncreaseGraph location="oc" color="rgb(201,52,235)" />
        </div>
      </div>
    </div>
  );
};
