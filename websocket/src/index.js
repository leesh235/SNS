import express from "express";
import "./config/dotenv";
import loaders from "./loaders";

const startApp = async () => {
    const app = express();
    const port = process.env.PORT;

    await loaders(app);

    app.listen(port, () => {
        console.log(`start chat server:${port}`);
    });
};

startApp();
