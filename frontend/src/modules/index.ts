import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
//reducer
import login from "./reducer/login";
import join from "./reducer/join";
import profile from "./reducer/profile";
import post from "./reducer/post";
import posts from "./reducer/posts";
//saga
import { authSaga } from "./saga/auth";
import { userSaga } from "./saga/user";
import { postSaga } from "./saga/post";
import { postsSaga } from "./saga/posts";

export const rootReducer = combineReducers({
    login,
    join,
    profile,
    post,
    posts,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), postSaga(), postsSaga()]);
}
