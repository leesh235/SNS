import { backend } from "./axios";
import { api } from "../utils/routes";
import {
    GetPost,
    Like,
    DeletePost,
    WritePost,
    MpdifyPost,
} from "../types/lib/post";

const post = async (data: GetPost) => {
    return await backend.get(api.post.get, { params: data });
};

const write = async (data: WritePost) => {
    return await backend.post(api.post.write, data);
};

const modify = async (data: MpdifyPost) => {
    return await backend.patch(api.post.modify, data);
};

const remove = async (data: DeletePost) => {
    return await backend.delete(api.post.delete, { params: data });
};

const like = async (data: Like) => {
    return await backend.post(api.post.like, data);
};

export default {
    post,
    write,
    modify,
    remove,
    like,
};
