import authApi from "./auth";
import * as chat from "./chat";
import * as comment from "./comment";
import * as friends from "./friends";
import * as post from "./post";
import * as posts from "./posts";
import * as search from "./search";
import * as user from "./user";
import * as userDetail from "./userDetail";

export default {
    authApi,
    chat: { ...chat },
    comment: { ...comment },
    friends: { ...friends },
    posts: { ...posts },
    post: { ...post },
    search: { ...search },
    user: { ...user },
    userDetail: { ...userDetail },
};
