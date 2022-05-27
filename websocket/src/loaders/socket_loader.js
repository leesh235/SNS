import { Server } from "socket.io";

export default (server) => {
    const io = new Server(server, { cors: { origin: "*" } });

    io.on("connection", (socket) => {
        console.log("connection");
    });
};
