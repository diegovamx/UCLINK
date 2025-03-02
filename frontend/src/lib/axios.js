import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    withCredentials: true,
});

/* 
2/27/25
- setup frontend

tools used:
vite (react + js)
tailwind css v4
daisy ui v5
react router dom
tanstack (react) query
axios
react-hot-toast

video timestamp: 2:33:40 - 2:50:20
*/