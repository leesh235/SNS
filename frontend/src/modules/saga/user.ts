import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    getProfile,
    writeIntroduce,
    setUserImage,
    getLatestImage,
} from "../../lib/user";
import {
    PROFILE,
    INTRODUCE,
    PROFILEIMAGE,
    COVERIMAGE,
} from "../action/profile";
import { LATESTIMAGE } from "../action/image";

const profile = createPromise(PROFILE, getProfile);
const introduce = createPromise(INTRODUCE, writeIntroduce);
const profile_image = createPromise(PROFILEIMAGE, setUserImage);
const cover_image = createPromise(COVERIMAGE, setUserImage);
const latest_image = createPromise(LATESTIMAGE, getLatestImage);

export function* userSaga() {
    yield takeEvery(PROFILE, profile);
    yield takeEvery(INTRODUCE, introduce);
    yield takeEvery(PROFILEIMAGE, profile_image);
    yield takeEvery(COVERIMAGE, cover_image);
    yield takeEvery(LATESTIMAGE, latest_image);
}
