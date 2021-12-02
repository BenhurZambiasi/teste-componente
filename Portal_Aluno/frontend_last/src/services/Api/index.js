import axios from "axios";

const api = axios.create({
  baseURL: "https://projetoportal.herokuapp.com/",
  // baseURL: "http://localhost:5556/",
});

export default api;
