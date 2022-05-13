import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
//reducer
import auth from "./reducer/auth";
import profile from "./reducer/profile";
import post from "./reducer/post";
import posts from "./reducer/posts";
import image from "./reducer/image";
import search from "./reducer/search";
import friends from "./reducer/friends";
import comment from "./reducer/comment";
//saga
import { authSaga } from "./saga/auth";
import { userSaga } from "./saga/user";
import { postSaga } from "./saga/post";
import { postsSaga } from "./saga/posts";
import { searchSaga } from "./saga/search";
import { friendsSaga } from "./saga/friends";
import { commentSaga } from "./saga/comment";

export const rootReducer = combineReducers({
    auth,
    profile,
    post,
    posts,
    image,
    search,
    friends,
    comment,
});

export function* rootSaga() {
    yield all([
        authSaga(),
        userSaga(),
        postSaga(),
        postsSaga(),
        searchSaga(),
        friendsSaga(),
        commentSaga(),
    ]);
}
