export const baseRoutes = {
    room: "/chat/room",
    message: "/chat/message",
};

export const routes = {
    room: {
        create: "/create",
        delete: "/delete",
        modify: "/modify",
        room: "/room",
        room_list: "/room_list",
    },
    message: {
        create: "/create",
        delete: "/delete",
        message_list: "/message_list",
    },
};

export const event = {
    join: "join",
    leave: "leave",
    message: "message",
    chat: "chat",
    alarm: "alarm",
};
