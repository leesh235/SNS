export const ROOMLIST = "chat/ROOMLIST";
export const MESSAGELIST = "chat/MESSAGELIST";
export const JOINROOM = "chat/JOINROOM";
export const JOINROOMLIST = "chat/JOINROOMLIST";
export const LEAVEROOM = "chat/LEAVEROOM";
export const CREATEGROUPROOM = "chat/CREATEGROUPROOM";

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

export const setJoinRoom = (data: any) => {
    return {
        type: JOINROOM,
        data,
    };
};

export const setJoinRoomList = (data: any) => {
    return {
        type: JOINROOMLIST,
        data,
    };
};

export const setLeaveRoom = (data: any) => {
    return {
        type: LEAVEROOM,
        data,
    };
};

export const setCreateGroupRoom = (data: any) => {
    return {
        type: CREATEGROUPROOM,
        data,
    };
};
