import { backend } from "./axios";
import { api } from "../utils/routes";
import { UserEmail } from "../types/lib/user";

const getDetail = async (data: UserEmail) => {
    return await backend.get(api.user.detail, { params: data });
};

const getInfo = async (data: UserEmail) => {
    return await backend.get(api.user.posts, { params: data });
};

const setImages = async (data: UserEmail) => {
    return await backend.get(api.user.images, { params: data });
};

const getPosts = async (data: UserEmail) => {
    return await backend.get(api.user.info, { params: data });
};

export default {
    getDetail,
    getInfo,
    setImages,
    getPosts,
};
