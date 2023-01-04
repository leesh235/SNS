import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { searchApi } from "../../lib";
import { searchAction } from "../action/search";

const searchAll = createPromise(searchAction.all, searchApi.searchAll);
const searchPost = createPromise(searchAction.post, searchApi.searchPost);
const searchPeople = createPromise(searchAction.people, searchApi.searchPeople);

export function* searchSaga() {
    yield takeEvery(searchAction.all, searchAll);
    yield takeEvery(searchAction.post, searchPost);
    yield takeEvery(searchAction.people, searchPeople);
}
