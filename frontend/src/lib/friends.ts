import { backend } from "./axios";
import { api } from "../utils/routes";

export const requestFriend = async (formData: any) => {
    return await backend.post(api.friends.req, formData);
};

export const responseFriend = async (formData: any) => {
    return await backend.post(api.friends.res, formData);
};

export const refuseFriend = async (formData: any) => {
    return await backend.post(api.friends.refuse, formData);
};

export const allFriendList = async (formData: any) => {
    return await backend.get(api.friends.all, { params: formData });
};

export const requestFriendList = async (formData: any) => {
    return await backend.get(api.friends.req_list, { params: formData });
};

export const responseFriendList = async (formData: any) => {
    return await backend.get(api.friends.res_list, { params: formData });
};

export const friendList = async (formData: any) => {
    return await backend.get(api.friends.friends_list, {
        params: formData,
    });
};

export const isFriend = async (formData: any) => {
    return await backend.get(api.friends.is_friend, {
        params: formData,
    });
};
