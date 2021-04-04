/* eslint-disable import/no-anonymous-default-export */
export default (state = "total_cases", action) => {
  switch (action.type) {
    case "CHANGE_METRIC":
      return action.payload;
    default:
      return state;
  }
};
