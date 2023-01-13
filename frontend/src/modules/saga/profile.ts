import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { profileApi } from "../../lib";
import { userAction } from "../action/profile";

const profile = createPromise(userAction.profile, profileApi.profile);
const introduce = createPromise(
    userAction.introduce,
    profileApi.modifyIntroduce
);
const profileImage = createPromise(
    userAction.profileImage,
    profileApi.modifyProfileimage
);
const coverImage = createPromise(
    userAction.coverImage,
    profileApi.modifyCoverimage
);
const loginInfo = createPromise(userAction.loginInfo, profileApi.logInInfo);
const latestImage = createPromise(
    userAction.latestImage,
    profileApi.getLatestImage
);
const allImage = createPromise(userAction.allImage, profileApi.getAllImage);

export function* userSaga() {
    yield takeEvery(userAction.profile, profile);
    yield takeEvery(userAction.introduce, introduce);
    yield takeEvery(userAction.profileImage, profileImage);
    yield takeEvery(userAction.coverImage, coverImage);
    yield takeEvery(userAction.loginInfo, loginInfo);
    yield takeEvery(userAction.latestImage, latestImage);
    yield takeEvery(userAction.allImage, allImage);
}
