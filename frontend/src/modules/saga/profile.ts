import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { profileApi } from "../../lib";
import { profileAction } from "../action/profile";

const profile = createPromise(profileAction.profile, profileApi.profile);
const introduce = createPromise(
    profileAction.introduce,
    profileApi.modifyIntroduce
);
const profileImage = createPromise(
    profileAction.profileImage,
    profileApi.modifyProfileimage
);
const coverImage = createPromise(
    profileAction.coverImage,
    profileApi.modifyCoverimage
);
const loginInfo = createPromise(profileAction.loginInfo, profileApi.logInInfo);
const latestImage = createPromise(
    profileAction.latestImage,
    profileApi.getLatestImage
);
const allImage = createPromise(profileAction.allImage, profileApi.getAllImage);

export function* userSaga() {
    yield takeEvery(profileAction.profile, profile);
    yield takeEvery(profileAction.introduce, introduce);
    yield takeEvery(profileAction.profileImage, profileImage);
    yield takeEvery(profileAction.coverImage, coverImage);
    yield takeEvery(profileAction.loginInfo, loginInfo);
    yield takeEvery(profileAction.latestImage, latestImage);
    yield takeEvery(profileAction.allImage, allImage);
}
