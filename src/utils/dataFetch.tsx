import axios from "axios";

const dataFetch = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export default dataFetch;
