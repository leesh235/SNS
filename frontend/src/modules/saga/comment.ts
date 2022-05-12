import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { listFunc, writeFunc, modifyFunc, deleteFunc } from "../../lib/comment";
import { COMMENTLIST, WRITE, MODIFY, DELETE } from "../action/comment";

const list = createPromise(COMMENTLIST, listFunc);
const write = createPromise(WRITE, writeFunc);
const modify = createPromise(MODIFY, modifyFunc);
const delete_commente = createPromise(DELETE, deleteFunc);

export function* commentSaga() {
    yield takeEvery(COMMENTLIST, list);
    yield takeEvery(WRITE, write);
    yield takeEvery(MODIFY, modify);
    yield takeEvery(DELETE, delete_commente);
}
