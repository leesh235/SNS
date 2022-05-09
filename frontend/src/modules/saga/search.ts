import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    searchAllFunc,
    searchPostFunc,
    searchPeopleFunc,
} from "../../lib/search";
import { SEARCHALL, SEARCHPOST, SEARCHPEOPLE } from "../action/search";

const searchAll = createPromise(SEARCHALL, searchAllFunc);
const searchPost = createPromise(SEARCHPOST, searchPostFunc);
const searchPeople = createPromise(SEARCHPEOPLE, searchPeopleFunc);

export function* searchSaga() {
    yield takeEvery(SEARCHALL, searchAll);
    yield takeEvery(SEARCHPOST, searchPost);
    yield takeEvery(SEARCHPEOPLE, searchPeople);
}
