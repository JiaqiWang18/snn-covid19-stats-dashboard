import statsApi from "../apis/statsApi";

export const fetchDisplay = (date) => async (dispatch) => {
  const response = await statsApi.get(`/get?date=${date}`);
  console.log(response.data);

  dispatch({ type: "FETCH_DISPLAY", payload: response.data });
};

export const fetchGraph = (startDate, endDate, type = "total_cases") => async (
  dispatch
) => {
  const response = await statsApi.get(
    `/graph-data?start=${startDate}&end=${endDate}&type=${type}`
  );
  console.log(response.data);
  dispatch({ type: "FETCH_GRAPH", payload: response.data });
};

export const changeMetric = (newMetric) => async (dispatch) => {
  dispatch({ type: "CHANGE_METRIC", payload: newMetric });
};
