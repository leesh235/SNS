import express from "express";
import http from "http";
import { Server } from "socket.io";
import "./config/dotenv";
import loaders from "./loaders";

const { FE_URL } = process.env;

const startApp = async () => {
    const port = process.env.PORT;

    const app = express();
    const server = http.Server(app);
    const io = new Server(server, { cors: { origin: `${FE_URL}` } });

    await loaders(app, io);

    server.listen(port, () => {
        console.log(`start chat server:${port}`);
    });
};

startApp();
