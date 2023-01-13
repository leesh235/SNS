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
const addJob = createPromise(userAction.addJob, profileApi.addJob);
const addSchool = createPromise(userAction.addSchool, profileApi.addSchool);
const addUniversity = createPromise(
    userAction.addUniversity,
    profileApi.addUniversity
);
const removeJob = createPromise(userAction.removeJob, profileApi.removeJob);
const removeSchool = createPromise(
    userAction.removeSchool,
    profileApi.removeSchool
);
const removeUniversity = createPromise(
    userAction.removeUniversity,
    profileApi.removeUniversity
);

export function* userSaga() {
    yield takeEvery(userAction.profile, profile);
    yield takeEvery(userAction.introduce, introduce);
    yield takeEvery(userAction.profileImage, profileImage);
    yield takeEvery(userAction.coverImage, coverImage);
    yield takeEvery(userAction.loginInfo, loginInfo);
    yield takeEvery(userAction.addJob, addJob);
    yield takeEvery(userAction.addSchool, addSchool);
    yield takeEvery(userAction.addUniversity, addUniversity);
    yield takeEvery(userAction.removeJob, removeJob);
    yield takeEvery(userAction.removeSchool, removeSchool);
    yield takeEvery(userAction.removeUniversity, removeUniversity);
}
