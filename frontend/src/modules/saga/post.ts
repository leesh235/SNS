import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { postApi } from "../../lib/index";
import {
    POSTDETAILS,
    POSTDETAIL,
    WRITEPOST,
    MODIFYPOST,
    DELETEPOST,
    LIKE,
} from "../action/post";

const details = createPromise(POSTDETAILS, postApi.postDetails);
const detail = createPromise(POSTDETAIL, postApi.post);
const write = createPromise(WRITEPOST, postApi.write);
const modify = createPromise(MODIFYPOST, postApi.modify);
const delete_ = createPromise(DELETEPOST, postApi.remove);
const like = createPromise(LIKE, postApi.like);

export function* postSaga() {
    yield takeEvery(POSTDETAILS, details);
    yield takeEvery(POSTDETAIL, detail);
    yield takeEvery(WRITEPOST, write);
    yield takeEvery(MODIFYPOST, modify);
    yield takeEvery(DELETEPOST, delete_);
    yield takeEvery(LIKE, like);
}
