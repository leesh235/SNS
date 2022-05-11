export const baseRoutes = {
    auth: "/api/auth",
    user: "/api/user",
    post: "/api/post",
    posts: "/api/posts",
    comment: "/api/comment",
    chatting: "/api/chatting",
    search: "/api/search",
    friends: "/api/friends",
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
    search: {
        all: "/all",
        post: "/post",
        people: "/people",
        friend: "/friend",
    },
    friend: {
        request: "/request",
        response: "/response",
        request_list: "/request_list",
        response_list: "/response_list",
        friend_list: "/friend_list",
    },
};

export const entities: string = "src/entity/*.ts";
