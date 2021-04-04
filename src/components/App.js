import React from "react";
import TopBar from "./TopBar";
import "./index.css";
import Graphs from "./Graphs";
import DataDisplay from "./DataDisplay";

const App = () => {
  return (
    <>
      <TopBar />
      <div className="container-fluid mt-3">
        <DataDisplay />
        <Graphs />
      </div>
    </>
  );
};

export default App;
