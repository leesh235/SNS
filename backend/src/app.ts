import auth from "./api/auth.controller";
import user from "./api/user.controller";
import post from "./api/post.controller";
import posts from "./api/posts.controller";
import comment from "./api/comment.controller";
import chatting from "./api/chatting.controller";

import express from "express";

const app = express();

app.use("/auth", auth);
app.use("/user", user);
app.use("/post", post);
app.use("/posts", posts);
app.use("/comment", comment);
app.use("/chatting", chatting);

app.listen("5000", () => {
    console.log(`start server`);
});