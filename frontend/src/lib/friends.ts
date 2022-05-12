import { backend } from "./axios";
import { api } from "../utils/routes";

export const requestFriend = async (formData: any) => {
    const res = await backend.post(api.friends.req, formData);
    console.log(res.data);
    return res.data;
};

export const responseFriend = async (formData: any) => {
    const res = await backend.post(api.friends.res, formData);
    return res.data;
};

export const refuseFriend = async (formData: any) => {
    const res = await backend.post(api.friends.refuse, formData);
    return res.data;
};

export const requestFriendList = async (formData: any) => {
    const res = await backend.get(api.friends.req_list, { params: formData });
    return res.data;
};

export const responseFriendList = async (formData: any) => {
    const res = await backend.get(api.friends.res_list, { params: formData });
    return res.data;
};

export const friendList = async (formData: any) => {
    const res = await backend.get(api.friends.friends_list, {
        params: formData,
    });
    return res.data;
};
