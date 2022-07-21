import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    writePostFunc,
    modifyPostFunc,
    deletePostFunc,
    postFunc,
    likeFunc,
    postDetailsFunc,
} from "../../lib/post";
import {
    POSTDETAILS,
    POSTDETAIL,
    WRITEPOST,
    MODIFYPOST,
    DELETEPOST,
    LIKE,
} from "../action/post";

const details = createPromise(POSTDETAILS, postDetailsFunc);
const detail = createPromise(POSTDETAIL, postFunc);
const write = createPromise(WRITEPOST, writePostFunc);
const modify = createPromise(MODIFYPOST, modifyPostFunc);
const delete_ = createPromise(DELETEPOST, deletePostFunc);
const like = createPromise(LIKE, likeFunc);

export function* postSaga() {
    yield takeEvery(POSTDETAILS, details);
    yield takeEvery(POSTDETAIL, detail);
    yield takeEvery(WRITEPOST, write);
    yield takeEvery(MODIFYPOST, modify);
    yield takeEvery(DELETEPOST, delete_);
    yield takeEvery(LIKE, like);
}
