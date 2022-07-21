import { backend } from "./axios";
import { api } from "../utils/routes";
import { GetPost, Like, DeletePost } from "../types/post";

export const postDetailsFunc = async () => {
    const res = await backend.get(api.postIds.ids);
    return res.data;
};

export const postFunc = async (formData: GetPost) => {
    const res = await backend.get(api.post.get, { params: formData });
    return res.data;
};

export const writePostFunc = async (formData: any) => {
    const res = await backend.post(api.post.write, formData);
    return res.data;
};

export const modifyPostFunc = async (formData: any) => {
    const res = await backend.put(api.post.modify, formData);
    return res.data;
};

export const deletePostFunc = async (formData: DeletePost) => {
    const res = await backend.delete(api.post.delete, { params: formData });
    return res.data;
};

export const likeFunc = async (formData: any) => {
    const res = await backend.post(api.post.like, { ...formData });
    return res.data;
};
