import axios from "axios";

export const axiosApiInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
