import express from "express";
import cors from "cors";
import { baseRoutes } from "../config/route";
//routes
import auth from "../api/auth.controller";
import user from "../api/user.controller";
import post from "../api/post.controller";
import posts from "../api/posts.controller";
import comment from "../api/comment.controller";
import chatting from "../api/chatting.controller";
//config
import { corsOptions } from "../config/cors";

export default async ({ app }: { app: express.Application }) => {
    app.use(`${baseRoutes.auth}`, auth);
    app.use(`${baseRoutes.user}`, user);
    app.use(`${baseRoutes.post}`, post);
    app.use(`${baseRoutes.posts}`, posts);
    app.use(`${baseRoutes.comment}`, comment);
    app.use(`${baseRoutes.chatting}`, chatting);

    app.use(cors(corsOptions));
    app.use(express.json());

    return app;
};
