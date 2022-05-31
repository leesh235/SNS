export const baseRoutes = {
    room: "/chat/room",
    message: "/chat/message",
    user: "/chat/user",
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
    user: {
        create: "/create",
        modify: "/modify",
        delete: "/delete",
    },
};

export const event = {
    join: "join",
    leave: "leave",
    message: "message",
    chat: "chat",
    alarm: "alarm",
};
