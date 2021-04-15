import React from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";

const DailyIncreaseGraph = (props) => {
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
      text: "Daily Increase",
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

  const getDailyIncreaseDateAndData = () => {
    let dateArr = [];
    let dataArr = [];
    for (let i = 1; i < props.data.length; i++) {
      let currentDate = props.data[i].date;
      let currentData = props.data[i][props.type];
      dateArr.push(currentDate.replaceAll("-", "/"));
      dataArr.push(currentData - props.data[i - 1][props.type]);
    }
    return [dateArr, dataArr];
  };

  const [dateArr, dataArr] = getDailyIncreaseDateAndData();

  const dataForRender = {
    labels: dateArr,
    datasets: [
      {
        data: dataArr,
        fill: false,
        backgroundColor: props.color,
        borderColor: props.color,
      },
    ],
  };

  return (
    <div className="row">
      <Bar data={dataForRender} options={chartOptions} height={225} />
    </div>
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

export default connect(mapStateToProps)(DailyIncreaseGraph);
