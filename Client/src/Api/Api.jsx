import axios from "axios";

const API = axios.create({
  baseURL: "https://final-hackathon-smit.vercel.app/api/v1", // Corrected Backend URL
  withCredentials: true, // To handle cookies
});

export default API;
