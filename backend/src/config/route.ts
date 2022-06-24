export const baseRoutes = {
    auth: "/api/auth",
    user: "/api/user",
    user_detail: "/api/user_detail",
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
    user_detail: {
        get_ability: "/ability",
        get_info: "/info",
        set_ability: "/set_ability",
        set_university: "/set_university",
        set_school: "/set_school",
        set_number: "/set_number",
        set_address: "/set_address",
    },
    user: {
        profile: "/profile",
        login_info: "/login_info",
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
        user_list: "/user",
        friends_list: "/friends",
    },
    comment: {
        get: "/",
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
        is_friend: "/is_friend",
        request: "/request",
        response: "/response",
        request_list: "/request_list",
        response_list: "/response_list",
        friend_list: "/friend_list",
        refuse: "/refuse",
        all: "/all",
    },
};

export const entities: string = "src/entity/*.ts";
