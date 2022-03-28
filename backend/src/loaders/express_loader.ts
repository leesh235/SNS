import express from "express";
import cors from "cors";
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
    app.use("/auth", auth);
    app.use("/user", user);
    app.use("/post", post);
    app.use("/posts", posts);
    app.use("/comment", comment);
    app.use("/chatting", chatting);

    app.use(cors(corsOptions));
    app.use(express.json());

    return app;
};
