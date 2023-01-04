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
    isFriend: (data: any) => {
        return {
            type: friendsAction.isFriend,
            data,
        };
    },
    request: (data: any) => {
        return {
            type: friendsAction.request,
            data,
        };
    },
    response: (data: any) => {
        return {
            type: friendsAction.response,
            data,
        };
    },
    refuse: (data: any) => {
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
    friendList: (data?: any) => {
        return {
            type: friendsAction.friendList,
            data,
        };
    },
    allList: () => {
        return {
            type: friendsAction.allList,
        };
    },
};
