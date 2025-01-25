import axios from "axios";

const API = axios.create({
    baseURL: "https://final-hackathon-smit-v69t.vercel.app/api/v1", // Remove extra slash
    withCredentials: true, // To handle cookies
  });
  

export default API;
