export default (state = { data: {}, fetching: false }, action) => {
  switch (action.type) {
    case "FETCH_GRAPH":
      return { ...state, data: action.payload, fetching: false };
    case "START_FETCH_GRAPH":
      return { ...state, fetching: true };
    case "CHANGE_TYPE":
      return { ...state, type: action.payload };
    case "CHANGE_DATES":
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };
    default:
      return state;
  }
};
