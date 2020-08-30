import axios from "axios";


const instance = axios.create({
  // baseURL: "http://192.168.0.155:8000",
  baseURL: "http://localhost:8000",
});


export default instance;
