import { backend } from "./axios";
import { api } from "../utils/routes";
import { Take } from "../types/lib/post";

const posts = async (data: Take) => {
    return await backend.get(api.posts.all, { params: data });
};

const myPosts = async (data: Take) => {
    return await backend.get(api.posts.my, { params: data });
};

const userPosts = async (data: Take) => {
    return await backend.get(api.posts.user, { params: data });
};

const likePosts = async (data: Take) => {
    return await backend.get(api.posts.like, { params: data });
};

const bookmarkPosts = async (data: Take) => {
    return await backend.get(api.posts.bookmark, { params: data });
};

export default {
    posts,
    myPosts,
    userPosts,
    likePosts,
    bookmarkPosts,
};
