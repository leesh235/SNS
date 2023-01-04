import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { userApi } from "../../lib";
import { userAction } from "../action/user";
import { imageAction } from "../action/image";

const profile = createPromise(userAction.profile, userApi.profile);
const introduce = createPromise(userAction.introduce, userApi.introduce);
const profile_image = createPromise(userAction.profileImage, userApi.userImage);
const cover_image = createPromise(userAction.coverImage, userApi.userImage);
const latest_image = createPromise(
    imageAction.latestImage,
    userApi.latestImage
);
const all_images = createPromise(imageAction.allImage, userApi.allImages);
const login_info = createPromise(userAction.loginInfo, userApi.logInInfo);

export function* userSaga() {
    yield takeEvery(userAction.profile, profile);
    yield takeEvery(userAction.introduce, introduce);
    yield takeEvery(userAction.profileImage, profile_image);
    yield takeEvery(userAction.coverImage, cover_image);
    yield takeEvery(imageAction.latestImage, latest_image);
    yield takeEvery(imageAction.allImage, all_images);
    yield takeEvery(userAction.loginInfo, login_info);
}
