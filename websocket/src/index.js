import express from "express";
import http from "http";
import "./config/dotenv";
import loaders from "./loaders";

const startApp = async () => {
    const port = process.env.PORT;

    const app = express();
    const server = http.Server(app);

    await loaders(app, server);

    app.listen(port, () => {
        console.log(`start chat server:${port}`);
    });
};

startApp();
