import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { userApi } from "../../lib";
import { userAction } from "../action/user";

const detail = createPromise(userAction.detail, userApi.getDetail);
const info = createPromise(userAction.info, userApi.getInfo);
const images = createPromise(userAction.images, userApi.getImages);
const posts = createPromise(userAction.posts, userApi.getPosts);

export function* userDetailSaga() {
    yield takeEvery(userAction.detail, detail);
    yield takeEvery(userAction.info, info);
    yield takeEvery(userAction.images, images);
    yield takeEvery(userAction.posts, posts);
}
