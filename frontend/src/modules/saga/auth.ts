import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { loginFunc } from "../../lib/auth";
import { LOGIN } from "../action/auth";

const login = createPromise(LOGIN, loginFunc);

export function* authSaga() {
    yield takeEvery(LOGIN, login);
}
