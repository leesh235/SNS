import express from "express";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";
import { baseRoutes } from "../config/route";
//routes
import auth from "../api/auth.controller";
import user from "../api/user.controller";
import post from "../api/post.controller";
import posts from "../api/posts.controller";
import comment from "../api/comment.controller";
import chatting from "../api/chatting.controller";
//middleware
import { corsOptions } from "../config/cors";
import passportConfig from "../config/passport";

export default async ({ app }: { app: express.Application }) => {
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan("dev"));

    passportConfig();

    app.use(`${baseRoutes.auth}`, auth);
    app.use(`${baseRoutes.user}`, user);
    app.use(`${baseRoutes.post}`, post);
    app.use(`${baseRoutes.posts}`, posts);
    app.use(`${baseRoutes.comment}`, comment);
    app.use(`${baseRoutes.chatting}`, chatting);

    return app;
};
