import { backend } from "./axios";
import { api } from "../utils/routes";

export const getPostsFunc = async (formData: any) => {
    return await backend.get(api.posts.all_ist, { params: formData });
};

export const getMyPostsFunc = async (formData: any) => {
    return await backend.get(api.posts.my_list, { params: formData });
};

export const getFriendsPostsFunc = async () => {
    return await backend.get(api.posts.friends_list);
};

export const getLikePostsFunc = async (formData: any) => {
    return await backend.get(api.posts.like_list, { params: formData });
};

export const getBookmarkPostsFunc = async () => {
    return await backend.get(api.posts.bookmark_list);
};
