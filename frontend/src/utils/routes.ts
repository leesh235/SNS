export const routes = {
    home: "/",
    signup: "/signup/",
    login: "/login/",
    forget: "/fotget/",
    welcome: "/welcome/",
    profile: "/profile",
    friends: "/friends",
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
        my_list: "/posts/:userId",
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
