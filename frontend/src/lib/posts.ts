import { backend } from "./axios";
import { api } from "../utils/routes";

const posts = async (formData: any) => {
    return await backend.get(api.posts.all_ist, { params: formData });
};

const myPosts = async (formData: any) => {
    return await backend.get(api.posts.my_list, { params: formData });
};

const friendsPosts = async () => {
    return await backend.get(api.posts.friends_list);
};

const likePosts = async (formData: any) => {
    return await backend.get(api.posts.like_list, { params: formData });
};

const bookmarkPosts = async () => {
    return await backend.get(api.posts.bookmark_list);
};

export default {
    posts,
    myPosts,
    friendsPosts,
    likePosts,
    bookmarkPosts,
};
