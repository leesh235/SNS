import express from "express";
import cors from "cors";
import morgan from "morgan";
import { baseRoutes } from "../config/routes";
//router
import room from "../api/room.controller";
import message from "../api/chat.controller";
//middleware
import { jwt_authenticate } from "../config/jwt";

export default async (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan("dev"));
    app.use(jwt_authenticate);

    app.use(baseRoutes.room, jwt_authenticate, room);
    app.use(baseRoutes.message, jwt_authenticate, message);

    return app;
};
