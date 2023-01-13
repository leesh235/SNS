import { backend } from "./axios";
import { api } from "../utils/routes";
import { IsFriend, Request, Response, Refuse } from "../types/lib/friends";

const requestFriend = async (data: Request) => {
    return await backend.post(api.friends.request, data);
};

const responseFriend = async (data: Response) => {
    return await backend.post(api.friends.response, data);
};

const refuseFriend = async (data: Refuse) => {
    return await backend.post(api.friends.refuse, data);
};

const allList = async () => {
    return await backend.get(api.friends.all);
};

const requestList = async () => {
    return await backend.get(api.friends.requestList);
};

const responseList = async () => {
    return await backend.get(api.friends.responseList);
};

const friendList = async () => {
    return await backend.get(api.friends.friendList);
};

const isFriend = async (data: IsFriend) => {
    return await backend.get(api.friends.isFriend, {
        params: data,
    });
};

export default {
    requestFriend,
    responseFriend,
    refuseFriend,
    allList,
    requestList,
    responseList,
    friendList,
    isFriend,
};
