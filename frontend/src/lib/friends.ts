import { backend } from "./axios";
import { api } from "../utils/routes";

const requestFriend = async (formData: any) => {
    return await backend.post(api.friends.req, formData);
};

const responseFriend = async (formData: any) => {
    return await backend.post(api.friends.res, formData);
};

const refuseFriend = async (formData: any) => {
    return await backend.post(api.friends.refuse, formData);
};

const allFriendList = async (formData: any) => {
    return await backend.get(api.friends.all, { params: formData });
};

const requestFriendList = async (formData: any) => {
    return await backend.get(api.friends.req_list, { params: formData });
};

const responseFriendList = async (formData: any) => {
    return await backend.get(api.friends.res_list, { params: formData });
};

const friendList = async (formData: any) => {
    return await backend.get(api.friends.friends_list, {
        params: formData,
    });
};

const isFriend = async (formData: any) => {
    return await backend.get(api.friends.is_friend, {
        params: formData,
    });
};

export default {
    requestFriend,
    responseFriend,
    refuseFriend,
    allFriendList,
    requestFriendList,
    responseFriendList,
    friendList,
    isFriend,
};
