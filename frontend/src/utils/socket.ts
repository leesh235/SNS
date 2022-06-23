import { io } from "socket.io-client";

export let socket: any = io("http://localhost:4000/", {
    query: { token: `${localStorage.getItem("token")}` },
});

export const connectSocket = () => {
    if (socket) return;
    socket.connect();
};

export const disconnectSocket = () => {
    if (socket === null || socket.connected === false) return;
    socket.disconnect();
    socket = undefined;
};

export const request = (type: any, data: any) => {
    if (socket === null || socket.connected === false) connectSocket();
    socket.emit(type, data);
};

export const response = (type: any, cb: any) => {
    if (socket.hasListeners(type)) socket.off(type);
    socket.on(type, cb);
};

export const event = {
    join: "join",
    leave: "leave",
    chat: "chat",
    message: "message",
};
