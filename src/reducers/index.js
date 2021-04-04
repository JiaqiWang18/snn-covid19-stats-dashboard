import { combineReducers } from "redux";
import displayReducer from "./displayReducer";
import graphReducer from "./graphReducer";
import metricReducer from "./metricReducer";

export default combineReducers({
  displayData: displayReducer,
  graphData: graphReducer,
  currentMetrix: metricReducer,
});
