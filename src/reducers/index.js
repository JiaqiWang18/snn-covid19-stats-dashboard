import { combineReducers } from "redux";
import displayReducer from "./displayReducer";
import graphReducer from "./graphReducer";

export default combineReducers({
  displayData: displayReducer,
  graphData: graphReducer,
});
