export const ROOMLIST = "chat/ROOMLIST";
export const ROOMLIST_SUCCESS = "chat/ROOMLIST_SUCCESS";
export const ROOMLIST_ERROR = "chat/ROOMLIST_ERROR";

export const MESSAGELIST = "chat/MESSAGELIST";
export const MESSAGELIST_SUCCESS = "chat/MESSAGELIST_SUCCESS";
export const MESSAGELIST_ERROR = "chat/MESSAGELIST_ERROR";

export const setRoomList = () => {
    return {
        type: ROOMLIST,
    };
};

export const setMessageList = (data: any) => {
    return {
        type: MESSAGELIST,
        data,
    };
};
