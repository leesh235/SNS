export const routes = {
    home: "/",
    signup: "/signup/",
    login: "/login/",
    forget: "/fotget/",
    welcome: "/welcome/",
    profile: "/profile",
    friends: "/friends",
    detail: "/detail/",
};

export const api = {
    auth: {
        login: "/auth/login",
        join: "/auth/join",
    },
    user: {
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
    post: {
        get: "/post/:postId",
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
        get: "/comment/:postId",
        write: "/comment/write",
        modify: "/comment/modify",
        delete: "/comment/delete",
        like: "/comment/like",
    },
};
