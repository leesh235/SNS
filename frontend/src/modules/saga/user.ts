import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { userApi } from "../../lib";
import {
    PROFILE,
    INTRODUCE,
    PROFILEIMAGE,
    COVERIMAGE,
    LOGININFO,
} from "../action/user";
import { LATESTIMAGE, ALLIMAGE } from "../action/image";

const profile = createPromise(PROFILE, userApi.profile);
const introduce = createPromise(INTRODUCE, userApi.introduce);
const profile_image = createPromise(PROFILEIMAGE, userApi.userImage);
const cover_image = createPromise(COVERIMAGE, userApi.userImage);
const latest_image = createPromise(LATESTIMAGE, userApi.latestImage);
const all_images = createPromise(ALLIMAGE, userApi.allImages);
const login_info = createPromise(LOGININFO, userApi.logInInfo);

export function* userSaga() {
    yield takeEvery(PROFILE, profile);
    yield takeEvery(INTRODUCE, introduce);
    yield takeEvery(PROFILEIMAGE, profile_image);
    yield takeEvery(COVERIMAGE, cover_image);
    yield takeEvery(LATESTIMAGE, latest_image);
    yield takeEvery(ALLIMAGE, all_images);
    yield takeEvery(LOGININFO, login_info);
}
