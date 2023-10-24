import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3334/",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response ?? "";
    if (status == 401 || status == 400 || status == 404 || status >= 500) {
      console.log("Error: ", error);
    }
  }
);
