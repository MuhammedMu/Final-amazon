import axios from "axios";

const instance = axios.create({
  // The payment server (see /server). Set REACT_APP_PAYMENT_API_URL when deploying.
  baseURL: process.env.REACT_APP_PAYMENT_API_URL || "http://localhost:3004",
});

export default instance;
