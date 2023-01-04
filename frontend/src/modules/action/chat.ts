export const chatAction = {
    roomList: "chat/ROOMLIST",
    messageList: "chat/MESSAGELIST",
    joinRoom: "chat/JOINROOM",
    joinRoomList: "chat/JOINROOMLIST",
    leaveRoom: "chat/LEAVEROOM",
    createGroupRoom: "chat/CREATEGROUPROOM",
    deleteRoom: "chat/DELETEROOM",
};

export const chatActionCreator = {
    roomList: () => {
        return {
            type: chatAction.roomList,
        };
    },
    messageList: (data: any) => {
        return {
            type: chatAction.messageList,
            data,
        };
    },
    joinRoom: (data: any) => {
        return {
            type: chatAction.joinRoom,
            data,
        };
    },
    joinRoomList: (data: any) => {
        return {
            type: chatAction.joinRoomList,
            data,
        };
    },
    leaveRoom: (data: any) => {
        return {
            type: chatAction.leaveRoom,
            data,
        };
    },
    createGroupRoom: (data: any) => {
        return {
            type: chatAction.createGroupRoom,
            data,
        };
    },
    deleteRoom: (data: any) => {
        return {
            type: chatAction.deleteRoom,
            data,
        };
    },
};
