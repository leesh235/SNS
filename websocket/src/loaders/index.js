import express_loader from "./express_loader";
import db_loader from "./db_loader";
import socket_loader from "./socket_loader";
import adapter_loader from "./adapter_loader";

export default async (app, io) => {
    await db_loader;
    await adapter_loader(io);
    await socket_loader(io);
    await express_loader(app);
};
