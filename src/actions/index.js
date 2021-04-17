//import custom axios request obj
import statsApi from "../apis/statsApi";

//action creator that makes the API call to get numerical stats
export const fetchDisplay = (date) => async (dispatch) => {
  //action that marks the start of a request, used to show a loader
  dispatch({
    type: "START_FETCH_DISPLAY",
  });
  const response = await statsApi.get(`/get?date=${date}`);
  //update the store with new data
  dispatch({
    type: "FETCH_DISPLAY",
    payload: { date, data: response.data, fetching: false },
  });
};

//action that does the API call to get data for charts
export const fetchGraph = (
  startDate,
  endDate,
  metricType = "total_cases"
) => async (dispatch) => {
  //action that marks the start of a request, used to show a loader
  dispatch({
    type: "START_FETCH_GRAPH",
  });
  const response = await statsApi.get(
    `/graph-data?start=${startDate}&end=${endDate}&type=${metricType}`
  );
  //action that updates the store with new data
  dispatch({ type: "FETCH_GRAPH", payload: response.data });
};

//action creator when user change the metric type of the graph
export const changeGraphMetricType = (metricType) => async (
  dispatch,
  getState
) => {
  //dispatch to change the state
  dispatch({ type: "CHANGE_TYPE", payload: metricType });
  //dispatch another to actualy fetch the data using the new info
  dispatch(
    fetchGraph(
      getState().graphData.startDate,
      getState().graphData.endDate,
      metricType
    )
  );
};

//action creator that handles the case when user change the date range of the charts
export const changeGraphDates = (startDate, endDate) => async (
  dispatch,
  getState
) => {
  //dispatch action that change the date range of the charts
  dispatch({ type: "CHANGE_DATES", payload: { startDate, endDate } });

  //action that fetches new data according to updated states
  dispatch(fetchGraph(startDate, endDate, getState().graphData.metricType));
};
