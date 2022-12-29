import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    loginFunc,
    joinFunc,
    logoutFunc,
    refreshFunc,
    findPasswordFunc,
    verifyCodeNumberFunc,
    modifyPasswordFunc,
} from "../../lib/auth";
import { authAction } from "../action/auth";

const join = createPromise(authAction.join, joinFunc);
const login = createPromise(authAction.login, loginFunc);
const logout = createPromise(authAction.logout, logoutFunc);
const refresh = createPromise(authAction.refresh, refreshFunc);
const findPassword = createPromise(authAction.findPassword, findPasswordFunc);
const verifyCodeNumber = createPromise(
    authAction.verifyCodeNumber,
    verifyCodeNumberFunc
);
const modifyPassword = createPromise(
    authAction.modifyPassword,
    modifyPasswordFunc
);

export function* authSaga() {
    yield takeEvery(authAction.join, join);
    yield takeEvery(authAction.login, login);
    yield takeEvery(authAction.logout, logout);
    yield takeEvery(authAction.refresh, refresh);
    yield takeEvery(authAction.findPassword, findPassword);
    yield takeEvery(authAction.verifyCodeNumber, verifyCodeNumber);
    yield takeEvery(authAction.modifyPassword, modifyPassword);
}
