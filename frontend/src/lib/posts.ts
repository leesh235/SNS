import { backend } from "./axios";
import { api } from "../utils/routes";

export const getPostsFunc = async () => {
    const res = await backend.get(api.posts.all_ist);
    return res.data;
};

export const getMyPostsFunc = async (formData: any) => {
    const res = await backend.get(api.posts.my_list, { params: formData });
    return res.data;
};

export const getFriendsPostsFunc = async () => {
    const res = await backend.get(api.posts.friends_list);
    return res.data;
};

export const getListPostsFunc = async () => {
    const res = await backend.get(api.posts.like_list);
    return res.data;
};

export const getBookmarkPostsFunc = async () => {
    const res = await backend.get(api.posts.bookmark_list);
    return res.data;
};
