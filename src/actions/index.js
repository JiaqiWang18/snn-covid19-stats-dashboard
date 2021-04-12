import statsApi from "../apis/statsApi";

export const fetchDisplay = (date) => async (dispatch) => {
  dispatch({
    type: "START_FETCH_DISPLAY",
  });
  const response = await statsApi.get(`/get?date=${date}`);
  dispatch({
    type: "FETCH_DISPLAY",
    payload: { date, data: response.data, fetching: false },
  });
};

export const fetchGraph = (
  startDate,
  endDate,
  metricType = "total_cases"
) => async (dispatch) => {
  dispatch({
    type: "START_FETCH_GRAPH",
  });
  const response = await statsApi.get(
    `/graph-data?start=${startDate}&end=${endDate}&type=${metricType}`
  );
  dispatch({ type: "FETCH_GRAPH", payload: response.data });
};

export const changeGraphMetricType = (metricType) => async (
  dispatch,
  getState
) => {
  dispatch({ type: "CHANGE_TYPE", payload: metricType });

  await dispatch(
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

  await dispatch(
    fetchGraph(startDate, endDate, getState().graphData.metricType)
  );
};
