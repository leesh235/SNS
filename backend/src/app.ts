import express from "express";
import "./config/env";
import loaders from "./loaders";

async function startServer() {
    const app: express.Application = express();

    await loaders({ expressApp: app });

    app.listen(process.env.PORT, () => {
        console.log(`start server: ${process.env.PORT}`);
    });
}

startServer();
