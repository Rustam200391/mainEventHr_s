import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const loginUser = (userData) => api.post("/login", userData);
export const registerUser = (userData) => api.post("/register", userData);
export const createEvent = (eventData) => api.post("/events", eventData);
export const getEvents = () => api.get("/events");
