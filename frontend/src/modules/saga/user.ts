import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { getProfile, writeIntroduce, setUserImage } from "../../lib/user";
import {
    PROFILE,
    INTRODUCE,
    PROFILEIMAGE,
    COVERIMAGE,
} from "../action/profile";

const profile = createPromise(PROFILE, getProfile);
const introduce = createPromise(INTRODUCE, writeIntroduce);
const image = createPromise(PROFILEIMAGE || COVERIMAGE, setUserImage);

export function* userSaga() {
    yield takeEvery(PROFILE, profile);
    yield takeEvery(INTRODUCE, introduce);
    yield takeEvery(PROFILEIMAGE || COVERIMAGE, image);
}
