import express from "express";
import cors from "cors";
import morgan from "morgan";
import { baseRoutes } from "../config/routes";
//router
import room from "../api/room.controller";
import message from "../api/chat.controller";

export default async (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan("dev"));

    app.use(baseRoutes.room, room);
    app.use(baseRoutes.message, message);

    return app;
};
