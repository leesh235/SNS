import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    writePostFunc,
    modifyPostFunc,
    deletePostFunc,
    getPostFunc,
    likeFunc,
} from "../../lib/post";
import { WRITEPOST, POSTDETAIL } from "../action/post";

const write = createPromise(WRITEPOST, writePostFunc);
const detail = createPromise(POSTDETAIL, getPostFunc);

export function* postSaga() {
    yield takeEvery(WRITEPOST, write);
    yield takeEvery(POSTDETAIL, detail);
}
