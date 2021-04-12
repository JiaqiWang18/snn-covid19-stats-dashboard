import axios from "axios";

export default axios.create({
  baseURL: "https://snn-stats-api.herokuapp.com/",
});
