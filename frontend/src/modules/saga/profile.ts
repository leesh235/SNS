import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { profileApi } from "../../lib";
import { profileAction } from "../action/profile";

const profile = createPromise(profileAction.profile, profileApi.profile);
const userDetail = createPromise(
    profileAction.userDetail,
    profileApi.userDetail
);
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
const simple = createPromise(profileAction.simple, profileApi.logInInfo);
const latestImage = createPromise(
    profileAction.latestImage,
    profileApi.getLatestImage
);
const allImage = createPromise(profileAction.allImage, profileApi.getAllImage);

export function* profileSaga() {
    yield takeEvery(profileAction.profile, profile);
    yield takeEvery(profileAction.userDetail, userDetail);
    yield takeEvery(profileAction.introduce, introduce);
    yield takeEvery(profileAction.profileImage, profileImage);
    yield takeEvery(profileAction.coverImage, coverImage);
    yield takeEvery(profileAction.simple, simple);
    yield takeEvery(profileAction.latestImage, latestImage);
    yield takeEvery(profileAction.allImage, allImage);
}
