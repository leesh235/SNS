export const routes = {
    home: "/",
    signup: "/signup/",
    login: "/",
    forget: "/fotget/",
    welcome: "/welcome/",
    profile: "/profile",
    friends: "/friends",
    detail: "/detail/",
    userInfo: "/user/",
    search: "/search",
    like: "/like",
    latest: "/latest",
    bookmark: "/bookmark",
};

export const api = {
    auth: {
        login: "/auth/login",
        logout: "/auth/logout",
        refresh: "/auth/refresh",
        join: "/auth/join",
        find: "/auth/find",
        code: "/auth/code",
        modify: "/auth/modify",
    },
    user: {
        detail: "/user/",
        posts: "/user/posts/",
        images: "/user/images/",
        info: "/user/info/",
    },
    profile: {
        simple: "/profile/simple",
        profile: "/profile/profile/",
        userDtail: "/profile/info/",
        coverimage: "/profile/coverimage",
        profileimage: "/profile/profileimage/",
        introduce: "/profile/introduce/",
        people: "/profile/people",
        latest: "/profile/image/latest/",
        all: "/profile/image/all/",
    },
    info: {
        get: "/info/detail/",
        ability: "/info/ability",
        university: "/info/university",
        school: "/info/school",
    },
    image: {
        single: "/image/",
        remove: "/image/",
        array: "/image/array",
        latest: "/image/latest",
        all: "/image/all",
    },
    post: {
        get: "/post/",
        write: "/post/",
        modify: "/post/",
        delete: "/post/",
        like: "/post/like",
    },
    posts: {
        all: "/posts/",
        like: "/posts/like",
        bookmark: "/posts/bookmark",
        my: "/posts/my",
        user: "/posts/user",
    },
    comment: {
        get: "/comment/",
        write: "/comment/",
        modify: "/comment/",
        delete: "/comment/",
    },
    search: {
        all: "/search/all",
        post: "/search/post",
        people: "/search/people",
        friend: "/search/friend",
    },
    friends: {
        isFriend: "/friends/isFriend",
        friendList: "/friends/list",
        refuse: "/friends/",
        request: "/friends/request",
        requestList: "/friends/request/list",
        response: "/friends/response",
        responseList: "/friends/response/list",
        all: "/friends/all",
    },
    chat: {
        create_room: "/room/create",
        getRoomList: "/room/room_list",
        modifyRoomName: "/room/modify",
        deleteRoom: "/room/delete",
        getMessageList: "/message/message_list",
        addUser: "/user/addUser",
    },
};
