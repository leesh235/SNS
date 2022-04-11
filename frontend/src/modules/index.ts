import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
//reducer
import login from "./reducer/login";
import join from "./reducer/join";
import profile from "./reducer/profile";
//saga
import { authSaga } from "./saga/auth";
import { userSaga } from "./saga/user";

export const rootReducer = combineReducers({ login, join, profile });

export function* rootSaga() {
    yield all([authSaga(), userSaga()]);
}
