import React from "react";
import TopBar from "./TopBar";
import "./index.css";
import DataDisplay from "./DataDisplay";
import CityList from "./CityList";
import GraphSetGrid from "./GraphSetGrid";

const App = () => {
  return (
    <>
      <TopBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 my-3">
            <DataDisplay />
            <GraphSetGrid />
          </div>
          <div className="col-lg my-3 citylist-col">
            <CityList />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
