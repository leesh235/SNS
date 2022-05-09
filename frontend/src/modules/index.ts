import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
//reducer
import login from "./reducer/login";
import join from "./reducer/join";
import profile from "./reducer/profile";
import post from "./reducer/post";
import posts from "./reducer/posts";
import image from "./reducer/image";
import search from "./reducer/search";
//saga
import { authSaga } from "./saga/auth";
import { userSaga } from "./saga/user";
import { postSaga } from "./saga/post";
import { postsSaga } from "./saga/posts";
import { searchSaga } from "./saga/search";

export const rootReducer = combineReducers({
    login,
    join,
    profile,
    post,
    posts,
    image,
    search,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), postSaga(), postsSaga(), searchSaga()]);
}
