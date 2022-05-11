import { backend } from "./axios";
import { api } from "../utils/routes";

export const requestFriend = async (formData: any) => {
    const res = await backend.post(api.search.all, formData);
    return res.data;
};

export const responseFriend = async (formData: any) => {
    const res = await backend.post(api.search.post, formData);
    return res.data;
};

export const requestFriendList = async (formData: any) => {
    const res = await backend.get(api.search.all, { params: formData });
    return res.data;
};

export const responseFriendList = async (formData: any) => {
    const res = await backend.get(api.search.post, { params: formData });
    return res.data;
};

export const friendList = async (formData: any) => {
    const res = await backend.get(api.search.post, { params: formData });
    return res.data;
};
