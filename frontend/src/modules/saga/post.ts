import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    writePostFunc,
    modifyPostFunc,
    deletePostFunc,
    getPostFunc,
    likeFunc,
} from "../../lib/post";
import { WRITEPOST, POSTDETAIL, MODIFYPOST } from "../action/post";

const write = createPromise(WRITEPOST, writePostFunc);
const detail = createPromise(POSTDETAIL, getPostFunc);
const modify = createPromise(MODIFYPOST, modifyPostFunc);

export function* postSaga() {
    yield takeEvery(WRITEPOST, write);
    yield takeEvery(POSTDETAIL, detail);
    yield takeEvery(MODIFYPOST, modify);
}
