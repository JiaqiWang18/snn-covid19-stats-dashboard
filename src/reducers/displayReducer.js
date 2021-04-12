import { formatAPIDate } from "../utils";

/* eslint-disable import/no-anonymous-default-export */
export default (
  state = { data: {}, date: formatAPIDate(new Date()), fetching: false },
  action
) => {
  switch (action.type) {
    case "FETCH_DISPLAY":
      return {
        date: action.payload.date,
        data: action.payload.data,
        fetching: false,
      };
    case "START_FETCH_DISPLAY":
      return {
        ...state,
        fetching: true,
      };
    default:
      return state;
  }
};
