import axios from "axios";

const instance = axios.create({
  baseURL: "https://uditsolutions.in/krtexbackend/public/api/",
});

export default instance;
