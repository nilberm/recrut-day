import axios from "axios";

const accessToken = localStorage.getItem("accessToken");

export const api = axios.create({
  baseURL: "https://nxcuamed0k.execute-api.us-east-1.amazonaws.com/",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
