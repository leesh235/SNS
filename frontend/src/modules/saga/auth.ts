import { createPromise, createJWTPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { authAction } from "../action/auth";
import { authApi } from "../../lib/index";

const join = createJWTPromise(authAction.join, authApi.join);
const login = createJWTPromise(authAction.login, authApi.login);
const logout = createPromise(authAction.logout, authApi.logout);
const refresh = createPromise(authAction.refresh, authApi.refresh);
const find = createPromise(authAction.find, authApi.find);
const verify = createPromise(authAction.verify, authApi.verify);
const modify = createPromise(authAction.modify, authApi.modify);

export function* authSaga() {
    yield takeEvery(authAction.join, join);
    yield takeEvery(authAction.login, login);
    yield takeEvery(authAction.logout, logout);
    yield takeEvery(authAction.refresh, refresh);
    yield takeEvery(authAction.find, find);
    yield takeEvery(authAction.verify, verify);
    yield takeEvery(authAction.modify, modify);
}
