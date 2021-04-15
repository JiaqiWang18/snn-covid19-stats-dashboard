import React from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

const labels = {
  us: "United States",
  la: "Los Angeles County",
  oc: "Orange County",
  ca: "California",
};

const TotalCasesGraph = (props) => {
  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: (label) => label.commarize(),
          },
        },
      ],
      xAxes: [
        {
          type: "time",
          time: {
            unit: "day",
            unitStepSize: 1,
            displayFormats: {
              day: "MMM DD",
            },
          },
        },
      ],
    },
    title: {
      display: true,
      text: labels[props.location],
    },
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem) =>
          tooltipItem.yLabel.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      },
    },
    maintainAspectRatio: false,
  };
  const dataForRender = {
    labels: props.data.map((item) => {
      return item["date"].replaceAll("-", "/");
    }),
    datasets: [
      {
        data: props.data.map((item) => item[props.type]),
        fill: false,
        backgroundColor: props.color,
        borderColor: props.color,
      },
    ],
  };

  return (
    <>
      <div className="row">
        <Line data={dataForRender} options={chartOptions} height={225} />
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const target = state.graphData.data[ownProps.location] || [];
  return {
    startDate: state.graphData.startDate,
    endDate: state.graphData.endDate,
    data: target,
    type: state.graphData.type,
  };
};

export default connect(mapStateToProps)(TotalCasesGraph);
