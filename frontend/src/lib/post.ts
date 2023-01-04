import { backend } from "./axios";
import { api } from "../utils/routes";
import { GetPost, Like, DeletePost } from "../types/post";

const postDetails = async (formData: any) => {
    return await backend.get(api.postIds.ids, { params: formData });
};

const post = async (formData: GetPost) => {
    return await backend.get(api.post.get, { params: formData });
};

const write = async (formData: any) => {
    return await backend.post(api.post.write, formData);
};

const modify = async (formData: any) => {
    return await backend.put(api.post.modify, formData);
};

const remove = async (formData: DeletePost) => {
    return await backend.delete(api.post.delete, { params: formData });
};

const like = async (formData: any) => {
    return await backend.post(api.post.like, { ...formData });
};

export default {
    postDetails,
    post,
    write,
    modify,
    remove,
    like,
};
