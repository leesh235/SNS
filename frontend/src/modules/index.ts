import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
//reducer
import auth from "./reducer/auth";
import user from "./reducer/profile";
import post from "./reducer/post";
import image from "./reducer/image";
import search from "./reducer/search";
import friends from "./reducer/friends";
import comment from "./reducer/comment";
import chat from "./reducer/chat";
import userDetail from "./reducer/user";
//saga
import { authSaga } from "./saga/auth";
import { userSaga } from "./saga/profile";
import { postSaga } from "./saga/post";
import { postsSaga } from "./saga/posts";
import { searchSaga } from "./saga/search";
import { friendsSaga } from "./saga/friends";
import { commentSaga } from "./saga/comment";
import { chatSaga } from "./saga/chat";
import { userDetailSaga } from "./saga/user";
import { imageSaga } from "./saga/image";

export const rootReducer = combineReducers({
    auth,
    user,
    post,
    image,
    search,
    friends,
    comment,
    chat,
    userDetail,
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
        chatSaga(),
        userDetailSaga(),
        imageSaga(),
    ]);
}
