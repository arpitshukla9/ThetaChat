import axios from "axios";

if (!import.meta.env.VITE_API_URL) {
  throw new Error("VITE_API_URL is missing — check .env files!");
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});