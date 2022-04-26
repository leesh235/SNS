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
        set_image: "/image",
        set_introduce: "/introduce",
        friends: "/friends",
        all_image: "/all_image",
        latest_image: "/latest_image",
        req_friend: "/send_friend",
        res_friend: "/take_friend",
        await_friend: "/await_friend",
        people: "/people",
    },
    post: {
        get: "/",
        write: "/write",
        modify: "/modify",
        delete: "/delete",
        like: "/like",
    },
    posts: {
        all_ist: "/",
        like_list: "/like",
        bookmark_list: "/bookmark",
        my_list: "/my",
        friends_list: "/friends",
    },
    comment: {
        get: "/:postId",
        write: "/write",
        modify: "/modify",
        delete: "/delete",
        like: "/like",
    },
};

export const entities: string = "src/entity/*.ts";
