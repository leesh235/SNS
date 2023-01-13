import { backend } from "./axios";
import { api } from "../utils/routes";

const posts = async () => {
    return await backend.get(api.posts.all);
};

const myPosts = async () => {
    return await backend.get(api.posts.my);
};

const userPosts = async () => {
    return await backend.get(api.posts.user);
};

const likePosts = async () => {
    return await backend.get(api.posts.like);
};

const bookmarkPosts = async () => {
    return await backend.get(api.posts.bookmark);
};

export default {
    posts,
    myPosts,
    userPosts,
    likePosts,
    bookmarkPosts,
};
