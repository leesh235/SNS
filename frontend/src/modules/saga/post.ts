import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { postApi } from "../../lib/index";
import { postAction } from "../action/post";

const detail = createPromise(postAction.detail, postApi.post);
const write = createPromise(postAction.write, postApi.write);
const modify = createPromise(postAction.modify, postApi.modify);
const delete_ = createPromise(postAction.delete, postApi.remove);
const like = createPromise(postAction.like, postApi.like);

export function* postSaga() {
    yield takeEvery(postAction.detail, detail);
    yield takeEvery(postAction.write, write);
    yield takeEvery(postAction.modify, modify);
    yield takeEvery(postAction.delete, delete_);
    yield takeEvery(postAction.like, like);
}
