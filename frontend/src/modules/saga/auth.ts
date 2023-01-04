import { createPromise, createJWTPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { authAction } from "../action/auth";
import apies from "../../lib/index";

const join = createJWTPromise(authAction.join, apies.authApi.join);
const login = createJWTPromise(authAction.login, apies.authApi.login);
const logout = createPromise(authAction.logout, apies.authApi.logout);
const refresh = createPromise(authAction.refresh, apies.authApi.refresh);
const find = createPromise(authAction.find, apies.authApi.find);
const verify = createPromise(authAction.verify, apies.authApi.verify);
const modify = createPromise(authAction.modify, apies.authApi.modify);

export function* authSaga() {
    yield takeEvery(authAction.join, join);
    yield takeEvery(authAction.login, login);
    yield takeEvery(authAction.logout, logout);
    yield takeEvery(authAction.refresh, refresh);
    yield takeEvery(authAction.find, find);
    yield takeEvery(authAction.verify, verify);
    yield takeEvery(authAction.modify, modify);
}
