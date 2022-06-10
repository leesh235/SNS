export const ROOMLIST = "chat/ROOMLIST";
export const MESSAGELIST = "chat/MESSAGELIST";

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
