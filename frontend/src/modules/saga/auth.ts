import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { loginFunc, joinFunc } from "../../lib/auth";
import { LOGIN, JOIN } from "../action/auth";

const login = createPromise(LOGIN, loginFunc);
const join = createPromise(JOIN, joinFunc);

export function* authSaga() {
    yield takeEvery(LOGIN, login);
    yield takeEvery(JOIN, join);
}
