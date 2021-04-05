import React from "react";
import TopBar from "./TopBar";
import "./index.css";
import Graphs from "./Graphs";
import DataDisplay from "./DataDisplay";
import CityList from "./CityList";

const App = () => {
  return (
    <>
      <TopBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 my-3">
            <DataDisplay />
            <Graphs />
          </div>
          <div className="col-lg my-3">
            <CityList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
