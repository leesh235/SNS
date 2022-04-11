import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { getProfile } from "../../lib/user";
import { PROFILE } from "../action/profile";

const profile = createPromise(PROFILE, getProfile);

export function* userSaga() {
    yield takeEvery(PROFILE, profile);
}
