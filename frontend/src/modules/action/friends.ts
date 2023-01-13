import { IsFriend, Request, Response, Refuse } from "../../types/lib/friends";

export const friendsAction = {
    request: "friends/REQUEST",
    response: "friends/RESPONSE",
    refuse: "friends/REFUSE",
    requestList: "friends/REQUESTLIST",
    responseList: "friends/RESPONSELIST",
    friendList: "friends/FRIENDSLIST",
    allList: "friends/ALLLIST",
    isFriend: "friends/ISFRIEND",
};

export const friendsActionCreator = {
    isFriend: (data: IsFriend) => {
        return {
            type: friendsAction.isFriend,
            data,
        };
    },
    request: (data: Request) => {
        return {
            type: friendsAction.request,
            data,
        };
    },
    response: (data: Response) => {
        return {
            type: friendsAction.response,
            data,
        };
    },
    refuse: (data: Refuse) => {
        return {
            type: friendsAction.refuse,
            data,
        };
    },
    requestList: () => {
        return {
            type: friendsAction.requestList,
        };
    },
    responseList: () => {
        return {
            type: friendsAction.responseList,
        };
    },
    friendList: () => {
        return {
            type: friendsAction.friendList,
        };
    },
    allList: () => {
        return {
            type: friendsAction.allList,
        };
    },
};
