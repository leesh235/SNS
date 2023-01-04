import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { commentApi } from "../../lib/index";
import { COMMENTLIST, WRITE, MODIFY, DELETE } from "../action/comment";

const list = createPromise(COMMENTLIST, commentApi.list);
const write = createPromise(WRITE, commentApi.write);
const modify = createPromise(MODIFY, commentApi.modify);
const delete_commente = createPromise(DELETE, commentApi.remove);

export function* commentSaga() {
    yield takeEvery(COMMENTLIST, list);
    yield takeEvery(WRITE, write);
    yield takeEvery(MODIFY, modify);
    yield takeEvery(DELETE, delete_commente);
}
