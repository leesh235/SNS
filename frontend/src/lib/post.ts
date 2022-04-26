import { backend } from "./axios";
import { api } from "../utils/routes";
import {
    GetPost,
    WritePost,
    ModifyPost,
    DeletePost,
    Like,
} from "../types/post";

export const getPostFunc = async (formData: GetPost) => {
    const res = await backend.get(api.post.get, { params: formData });
    return res.data;
};

export const writePostFunc = async (formData: any) => {
    const res = await backend.post(api.post.write, formData);
    return res.data;
};

export const modifyPostFunc = async (formData: ModifyPost) => {
    const res = await backend.post(api.post.modify, { ...formData });
    return res.data;
};

export const deletePostFunc = async (formData: DeletePost) => {
    const res = await backend.post(api.post.delete, { ...formData });
    return res.data;
};

export const likeFunc = async (formData: Like) => {
    const res = await backend.post(api.post.like, { ...formData });
    return res.data;
};
