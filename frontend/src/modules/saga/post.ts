import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    writePostFunc,
    modifyPostFunc,
    deletePostFunc,
    getPostFunc,
    likeFunc,
} from "../../lib/post";
import { WRITEPOST } from "../action/post";

const write = createPromise(WRITEPOST, writePostFunc);

export function* postSaga() {
    yield takeEvery(WRITEPOST, write);
}
