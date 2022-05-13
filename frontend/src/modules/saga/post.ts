import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    writePostFunc,
    modifyPostFunc,
    deletePostFunc,
    getPostFunc,
    likeFunc,
    commentQuantityFunc,
    likeQuantityFunc,
} from "../../lib/post";
import {
    WRITEPOST,
    POSTDETAIL,
    MODIFYPOST,
    DELETEPOST,
    COMMENTQUANTITY,
    LIKEQUANTITY,
} from "../action/post";

const write = createPromise(WRITEPOST, writePostFunc);
const detail = createPromise(POSTDETAIL, getPostFunc);
const modify = createPromise(MODIFYPOST, modifyPostFunc);
const delete_ = createPromise(DELETEPOST, deletePostFunc);
const comment_quantity = createPromise(COMMENTQUANTITY, commentQuantityFunc);
const like_quantity = createPromise(LIKEQUANTITY, likeQuantityFunc);

export function* postSaga() {
    yield takeEvery(WRITEPOST, write);
    yield takeEvery(POSTDETAIL, detail);
    yield takeEvery(MODIFYPOST, modify);
    yield takeEvery(DELETEPOST, delete_);
    yield takeEvery(COMMENTQUANTITY, comment_quantity);
    yield takeEvery(LIKEQUANTITY, like_quantity);
}
