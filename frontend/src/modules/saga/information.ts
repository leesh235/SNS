import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { informationApi } from "../../lib";
import { informationAction } from "../action/information";

const getInfo = createPromise(
    informationAction.getInfo,
    informationApi.getInfo
);
const addJob = createPromise(informationAction.addJob, informationApi.addJob);
const addSchool = createPromise(
    informationAction.addSchool,
    informationApi.addSchool
);
const addUniversity = createPromise(
    informationAction.addUniversity,
    informationApi.addUniversity
);
const removeJob = createPromise(
    informationAction.removeJob,
    informationApi.removeJob
);
const removeSchool = createPromise(
    informationAction.removeSchool,
    informationApi.removeSchool
);
const removeUniversity = createPromise(
    informationAction.removeUniversity,
    informationApi.removeUniversity
);

export function* informationSaga() {
    yield takeEvery(informationAction.getInfo, getInfo);
    yield takeEvery(informationAction.addJob, addJob);
    yield takeEvery(informationAction.addSchool, addSchool);
    yield takeEvery(informationAction.addUniversity, addUniversity);
    yield takeEvery(informationAction.removeJob, removeJob);
    yield takeEvery(informationAction.removeSchool, removeSchool);
    yield takeEvery(informationAction.removeUniversity, removeUniversity);
}
