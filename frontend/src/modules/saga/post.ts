import {
    createPromise,
    createMultiPromise,
    createMetaPromise,
} from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { postApi } from "../../lib/index";
import { postAction } from "../action/post";
import { postsApi } from "../../lib/index";

const detail = createPromise(postAction.detail, postApi.post);
const write = createPromise(postAction.write, postApi.write);
const modify = createMetaPromise(postAction.modify, postApi.modify);
const delete_ = createMetaPromise(postAction.delete, postApi.remove);
const like = createMetaPromise(postAction.like, postApi.like);

export function* postSaga() {
    yield takeEvery(postAction.detail, detail);
    yield takeEvery(postAction.write, write);
    yield takeEvery(postAction.modify, modify);
    yield takeEvery(postAction.delete, delete_);
    yield takeEvery(postAction.like, like);
}
