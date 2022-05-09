import express from "express";
import cors from "cors";
import morgan from "morgan";
import { baseRoutes } from "../config/route";
//routes
import auth from "../api/auth.controller";
import user from "../api/user.controller";
import post from "../api/post.controller";
import posts from "../api/posts.controller";
import comment from "../api/comment.controller";
import chatting from "../api/chatting.controller";
import search from "../api/search.controller";
//middleware
import { corsOptions } from "../config/cors";
import "../config/passport";
import { jwt_authenticate } from "../config/passport";

export default async ({ app }: { app: express.Application }) => {
    app.use(express.static(`${process.env.FILE_PATH}`));
    app.use(express.static(`${process.env.POST_PATH}`));
    // app.use(cors(corsOptions));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan("dev"));

    app.use(`${baseRoutes.auth}`, auth);
    app.use(`${baseRoutes.user}`, jwt_authenticate, user);
    app.use(`${baseRoutes.post}`, jwt_authenticate, post);
    app.use(`${baseRoutes.posts}`, jwt_authenticate, posts);
    app.use(`${baseRoutes.comment}`, jwt_authenticate, comment);
    app.use(`${baseRoutes.chatting}`, jwt_authenticate, chatting);
    app.use(`${baseRoutes.search}`, jwt_authenticate, search);

    return app;
};
