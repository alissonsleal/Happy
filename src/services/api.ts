import axios from "axios";

const api = axios.create({
  baseURL: "https://deploy-happy.herokuapp.com",
});

export default api;
