import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api/v1", // Remove extra slash
    withCredentials: true, // To handle cookies
  });
  

export default API;
