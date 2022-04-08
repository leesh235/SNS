import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
//reducer
import login from "./reducer/login";
import join from "./reducer/join";
//saga
import { authSaga } from "./saga/auth";

export const rootReducer = combineReducers({ login, join });

export function* rootSaga() {
    yield all([authSaga()]);
}
