import axios from "axios";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  timeout: "10000",
  headers: {
    "Content-Type": "application/json",
    header: {
      Authorization: token ? token : null,
    },
  },
});

export default api;
