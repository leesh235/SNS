import { backend } from "./axios";
import { api } from "../utils/routes";
import { GetPost, Like, DeletePost } from "../types/post";

export const postDetailsFunc = async (formData: any) => {
    return await backend.get(api.postIds.ids, { params: formData });
};

export const postFunc = async (formData: GetPost) => {
    return await backend.get(api.post.get, { params: formData });
};

export const writePostFunc = async (formData: any) => {
    return await backend.post(api.post.write, formData);
};

export const modifyPostFunc = async (formData: any) => {
    return await backend.put(api.post.modify, formData);
};

export const deletePostFunc = async (formData: DeletePost) => {
    return await backend.delete(api.post.delete, { params: formData });
};

export const likeFunc = async (formData: any) => {
    return await backend.post(api.post.like, { ...formData });
};
