import axios from "axios";

const ecomapi = axios.create({
  baseURL: `${process.env.REACT_APP_ECOM_API_URL}/api`,
  headers: {
    "Content-Type": "application/json"
  }
});

export default ecomapi;
