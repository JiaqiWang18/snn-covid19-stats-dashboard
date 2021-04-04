import statsApi from "../apis/statsApi";

export const fetchDisplay = (date) => async (dispatch) => {
  const response = await statsApi.get(`/get?date=${date}`);
  console.log(response.data);

  dispatch({ type: "FETCH_DISPLAY", payload: response.data });
};

export const fetchGraph = (
  startDate,
  endDate,
  metricType = "total_cases"
) => async (dispatch) => {
  const response = await statsApi.get(
    `/graph-data?start=${startDate}&end=${endDate}&type=${metricType}`
  );
  console.log(response.data);
  dispatch({ type: "FETCH_GRAPH", payload: response.data });
};

export const changeGraphMetricType = (metricType) => async (
  dispatch,
  getState
) => {
  dispatch({ type: "CHANGE_TYPE", payload: metricType });

  dispatch(
    fetchGraph(
      getState().graphData.startDate,
      getState().graphData.endDate,
      metricType
    )
  );
};

export const changeGraphDates = (startDate, endDate) => async (
  dispatch,
  getState
) => {
  dispatch({ type: "CHANGE_DATES", payload: { startDate, endDate } });

  dispatch(fetchGraph(startDate, endDate, getState().graphData.metricType));
};
