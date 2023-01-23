import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
//reducer
import auth from "./reducer/auth";
import profile from "./reducer/profile";
import post from "./reducer/post";
import image from "./reducer/image";
import search from "./reducer/search";
import friends from "./reducer/friends";
import comment from "./reducer/comment";
import chat from "./reducer/chat";
import user from "./reducer/user";
import information from "./reducer/information";
//saga
import { authSaga } from "./saga/auth";
import { profileSaga } from "./saga/profile";
import { postSaga } from "./saga/post";
import { postsSaga } from "./saga/posts";
import { searchSaga } from "./saga/search";
import { friendsSaga } from "./saga/friends";
import { commentSaga } from "./saga/comment";
import { chatSaga } from "./saga/chat";
import { userSaga } from "./saga/user";
import { imageSaga } from "./saga/image";
import { informationSaga } from "./saga/information";

export const rootReducer = combineReducers({
    auth,
    profile,
    post,
    image,
    search,
    friends,
    comment,
    chat,
    user,
    information,
});

export function* rootSaga() {
    yield all([
        authSaga(),
        profileSaga(),
        postSaga(),
        postsSaga(),
        searchSaga(),
        friendsSaga(),
        commentSaga(),
        chatSaga(),
        userSaga(),
        imageSaga(),
        informationSaga(),
    ]);
}
