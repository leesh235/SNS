import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { searchApi } from "../../lib";
import { SEARCHALL, SEARCHPOST, SEARCHPEOPLE } from "../action/search";

const searchAll = createPromise(SEARCHALL, searchApi.searchAll);
const searchPost = createPromise(SEARCHPOST, searchApi.searchPost);
const searchPeople = createPromise(SEARCHPEOPLE, searchApi.searchPeople);

export function* searchSaga() {
    yield takeEvery(SEARCHALL, searchAll);
    yield takeEvery(SEARCHPOST, searchPost);
    yield takeEvery(SEARCHPEOPLE, searchPeople);
}
