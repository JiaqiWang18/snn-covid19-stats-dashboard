import React from "react";
import { connect } from "react-redux";

const QuickLinkBar = (props) => {
  return (
    <>
      <div className="bg-white d-flex flex-row justify-content-start">
        <p className="btn dummy-btn lead text-muted">
          Quick Links:
          <a href="https://coronavirus.1point3acres.com/zh" className="mx-1">
            一亩三分地
          </a>
          |
          <a
            href="https://www.nytimes.com/interactive/2021/us/covid-cases.html"
            className="mx-1"
          >
            NYT
          </a>
          |
          <a
            href="https://www.arcgis.com/apps/opsdashboard/index.html#/409af567637846e3b5d4182fcd779bea"
            className="mx-1"
          >
            JHU
          </a>
        </p>
      </div>
    </>
  );
};

export default connect()(QuickLinkBar);
