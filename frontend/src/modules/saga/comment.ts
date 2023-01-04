import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { commentApi } from "../../lib/index";
import { chatAction } from "../action/comment";

const list = createPromise(chatAction.list, commentApi.list);
const write = createPromise(chatAction.write, commentApi.write);
const modify = createPromise(chatAction.modify, commentApi.modify);
const delete_commente = createPromise(chatAction.delete, commentApi.remove);

export function* commentSaga() {
    yield takeEvery(chatAction.list, list);
    yield takeEvery(chatAction.write, write);
    yield takeEvery(chatAction.modify, modify);
    yield takeEvery(chatAction.delete, delete_commente);
}
