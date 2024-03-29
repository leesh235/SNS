import axios from "axios";

const { REACT_APP_BE, REACT_APP_WS } = process.env;

export const backend = axios.create({
    baseURL: REACT_APP_BE,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    withCredentials: true,
});

export const websocket = axios.create({
    baseURL: REACT_APP_WS,
    headers: {
        Authorization: `${localStorage.getItem("token")}`,
    },
});
