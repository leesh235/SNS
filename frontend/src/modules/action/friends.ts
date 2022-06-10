export const REQUEST = "friends/REQUEST";
export const RESPONSE = "friends/RESPONSE";
export const REFUSE = "friends/REFUSE";
export const REQUESTLIST = "friends/REQUESTLIST";
export const RESPONSELIST = "friends/RESPONSELIST";
export const FRIENDSLIST = "friends/FRIENDSLIST";
export const ALLLIST = "friends/ALLLIST";
export const ISFRIEND = "friends/ISFRIEND";

export const setIsFriend = (data: any) => {
    return {
        type: ISFRIEND,
        data,
    };
};

export const setRequest = (data: any) => {
    return {
        type: REQUEST,
        data,
    };
};

export const setResponse = (data: any) => {
    return {
        type: RESPONSE,
        data,
    };
};

export const setRefuse = (data: any) => {
    return {
        type: REFUSE,
        data,
    };
};

export const setRequestList = () => {
    return {
        type: REQUESTLIST,
    };
};

export const setResponseList = () => {
    return {
        type: RESPONSELIST,
    };
};

export const setFriendList = () => {
    return {
        type: FRIENDSLIST,
    };
};

export const setAllList = () => {
    return {
        type: ALLLIST,
    };
};
