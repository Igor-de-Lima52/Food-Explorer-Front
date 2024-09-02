import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-back-0q7d.onrender.com", withCredentials: true
})