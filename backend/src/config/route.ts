export const baseRoutes = {
    auth: "/api/auth",
    profile: "/api/profile",
    information: "/api/info",
    user: "/api/user",
    image: "/api/image",
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
        logout: "/logout",
        join: "/join",
        find: "/find",
        code: "/code",
        modify: "/modify",
        refresh: "/refresh",
    },
    user: {
        detail: "/",
        posts: "/posts/",
        images: "/images/",
        info: "/info/",
    },
    profile: {
        simple: "/simple",
        profile: "/profile",
        coverimage: "/coverimage",
        profileimage: "/profileimage",
        introduce: "/introduce",
        latest: "/image/latest",
        all: "/image/all",
    },
    information: {
        get: "/",
        ability: "/ability",
        university: "/university",
        school: "/school",
    },
    image: {
        single: "/",
        array: "/array",
        remove: "/",
    },
    post: {
        write: "/",
        modify: "/",
        get: "/",
        remove: "/",
        like: "/like",
    },
    posts: {
        all: "/",
        like: "/like",
        bookmark: "/bookmark",
        my: "/my",
        user: "/user",
    },
    comment: {
        get: "/",
        write: "/",
        modify: "/",
        delete: "/",
    },
    search: {
        all: "/all",
        post: "/post",
        people: "/people",
        friend: "/friend",
    },
    friend: {
        isFriend: "/",
        friendList: "/list",
        refuse: "/",
        request: "/request",
        requestList: "/request/list",
        response: "/response",
        responseList: "/response/list",
        all: "/all",
    },
};

export const entities: string = "src/entity/*.ts";
