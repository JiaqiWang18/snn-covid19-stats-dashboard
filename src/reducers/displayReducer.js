/* eslint-disable import/no-anonymous-default-export */
export default (state = { data: {} }, action) => {
  switch (action.type) {
    case "FETCH_DISPLAY":
      return { date: action.payload.date, data: action.payload.data };
    default:
      return state;
  }
};
