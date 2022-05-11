export const REQUEST = "friends/REQUEST";
export const REQUEST_SUCCESS = "friends/REQUEST_SUCCESS";
export const REQUEST_ERROR = "friends/REQUEST_ERROR";

export const RESPONSE = "friends/RESPONSE";
export const RESPONSE_SUCCESS = "friends/RESPONSE_SUCCESS";
export const RESPONSE_ERROR = "friends/RESPONSE_ERROR";

export const REQUESTLIST = "friends/REQUESTLIST";
export const REQUESTLIST_SUCCESS = "friends/REQUESTLIST_SUCCESS";
export const REQUESTLIST_ERROR = "friends/REQUESTLIST_ERROR";

export const RESPONSELIST = "friends/RESPONSELIST";
export const RESPONSELIST_SUCCESS = "friends/RESPONSELIST_SUCCESS";
export const RESPONSELIST_ERROR = "friends/RESPONSELIST_ERROR";

export const FRIENDSLIST = "friends/FRIENDSLIST";
export const FRIENDSLIST_SUCCESS = "friends/FRIENDSLIST_SUCCESS";
export const FRIENDSLIST_ERROR = "friends/FRIENDSLIST_ERROR";

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

export const setFriendList = (data: any) => {
    return {
        type: FRIENDSLIST,
        data,
    };
};
