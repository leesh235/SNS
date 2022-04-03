export const baseRoutes = {
    auth: "/api/auth",
    user: "/api/user",
    post: "/api/post",
    posts: "/api/posts",
    comment: "/api/comment",
    chatting: "/api/chatting",
};

export const routes = {
    auth: {
        login: "/login",
        join: "/join",
    },
    user: {
        profile: "/profile",
    },
};

export const entities: string = "src/entity/*.ts";
