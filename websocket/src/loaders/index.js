import express_loader from "./express_loader";
import db_loader from "./db_loader";
import socket_loader from "./socket_loader";

export default async (app, server) => {
    await db_loader;
    await socket_loader(server);
    await express_loader(app);
};
