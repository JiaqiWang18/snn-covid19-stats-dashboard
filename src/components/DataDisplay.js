import React from "react";
import { connect } from "react-redux";
import CADisplay from "./CADisplay";
import CountyDisplay from "./CountyDisplay";
import DatePicker from "./DatePicker";
import Loader from "./Loader";
import QuickLinkBar from "./QuickLinkBar";
import UnitedStatesDisplay from "./UnitedStatesDisplay";

const DataDIsplay = (props) => {
  return (
    <>
      <div className="bg-white d-flex flex-row justify-content-start border-bottom mb-2">
        <p className="btn dummy-btn lead">Select Date:</p>
        <DatePicker />
      </div>
      {props.fetching ? (
        <div className="d-flex flex-row bg-white justify-content-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="row display-row">
            <div className="col-lg-5 us-col display-col bg-white">
              <UnitedStatesDisplay />
            </div>
            <div className="col-lg other-col display-col">
              <div className="row-md">
                <CADisplay />
              </div>
              <div className="row display-col">
                <div className="col-sm display-col us-col bg-white">
                  <CountyDisplay location="LA County" />
                </div>
                <div className="col-sm display-col oc-col bg-white">
                  <CountyDisplay location="Orange County" />
                </div>
              </div>
            </div>
          </div>
          <div className="row display-row bg-white my-2">
            <QuickLinkBar />
          </div>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    fetching: state.displayData.fetching,
  };
};

export default connect(mapStateToProps)(DataDIsplay);
