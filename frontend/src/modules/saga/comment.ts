import {
    createPromise,
    createMultiPromise,
    createMetaPromise,
} from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { commentApi } from "../../lib/index";
import { commentAction } from "../action/comment";

const list = createPromise(commentAction.list, commentApi.list);
const write = createMetaPromise(commentAction.write, commentApi.write);
const modify = createMetaPromise(commentAction.modify, commentApi.modify);
const remove = createMetaPromise(commentAction.delete, commentApi.remove);

export function* commentSaga() {
    yield takeEvery(commentAction.list, list);
    yield takeEvery(commentAction.write, write);
    yield takeEvery(commentAction.modify, modify);
    yield takeEvery(commentAction.delete, remove);
}
