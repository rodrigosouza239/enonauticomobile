import axios from "axios";

const api = axios.create({
  baseURL: "http://134.209.45.136:3337/",
});

export default api;
