import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Update with your backend's base URL
  timeout: 10000,
});

export default api;
