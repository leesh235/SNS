export const routes = {
    home: "/",
    signup: "/signup/",
    login: "/login/",
    forget: "/fotget/",
    welcome: "/welcome/",
    profile: "/profile",
    friends: "/friends",
    detail: "/detail/",
    userInfo: "/user/",
    search: "/search",
};

export const api = {
    auth: {
        login: "/auth/login",
        join: "/auth/join",
    },
    user: {
        login_info: "/user/login_info",
        profile: "/user/profile",
        introduce: "/user/introduce",
        image: "/user/image",
        all_image: "/user/all_image",
        latest_image: "/user/latest_image",
        req_friend: "/user/send_friend",
        res_friend: "/user/take_friend",
        await_friend: "/user/await_friend",
        people: "/user/people",
    },
    userDetail: {
        get_ability: "/user_detail/ability",
        get_info: "/user_detail/info",
        set_ability: "/user_detail/set_ability",
        set_university: "/user_detail/set_university",
        set_school: "/user_detail/set_school",
        set_number: "/user_detail/set_number",
        set_address: "/user_detail/set_address",
    },
    post: {
        get: "/post/",
        write: "/post/write",
        modify: "/post/modify",
        delete: "/post/delete",
        like: "/post/like",
    },
    posts: {
        all_ist: "/posts/",
        like_list: "/posts/like",
        bookmark_list: "/posts/bookmark",
        my_list: "/posts/my",
        friends_list: "/posts/friends",
    },
    comment: {
        get: "/comment/",
        write: "/comment/write",
        modify: "/comment/modify",
        delete: "/comment/delete",
        like: "/comment/like",
    },
    search: {
        all: "/search/all",
        post: "/search/post",
        people: "/search/people",
    },
    friends: {
        req: "/friends/request",
        res: "/friends/response",
        is_friend: "/friends/is_friend",
        req_list: "/friends/request_list",
        res_list: "/friends/response_list",
        friends_list: "/friends/friend_list",
        refuse: "/friends/refuse",
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
