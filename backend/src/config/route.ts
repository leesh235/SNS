export const baseRoutes = {
    auth: "/api/auth",
    profile: "/api/profile",
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
        posts: "/post/",
        images: "/images/",
        info: "/info/",
    },
    profile: {
        login_info: "/login_info",
        profile: "/profile",
        coverimage: "/coverimage",
        profileimage: "/profileimage",
        introduce: "/introduce",
        people: "/people",
        ability: "/ability",
        university: "/university",
        school: "/school",
    },
    image: {
        single: "/",
        array: "/array",
        remove: "/",
        latest: "/latest",
        all: "/all",
    },
    post: {
        get: "/",
        set: "/write",
        modify: "/",
        delete: "/",
        like: "/like",
    },
    posts: {
        allList: "/list",
        myList: "/list/my",
        likeList: "/list/like",
        friendsList: "/list/friends",

        all_ist: "/",
        like_list: "/like",
        bookmark_list: "/bookmark",
        my_list: "/my",
        user_list: "/user",
        friends_list: "/friends",
        ids: "/ids",
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
