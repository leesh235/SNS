import { createPromise, createMultiPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { informationApi } from "../../lib";
import { informationAction } from "../action/information";

const getInfo = createPromise(
    informationAction.getInfo,
    informationApi.getInfo
);
const addJob = createMultiPromise(
    informationAction.addJob,
    informationApi.addJob,
    informationApi.getInfo
);
const addSchool = createMultiPromise(
    informationAction.addSchool,
    informationApi.addSchool,
    informationApi.getInfo
);
const addUniversity = createMultiPromise(
    informationAction.addUniversity,
    informationApi.addUniversity,
    informationApi.getInfo
);
const removeJob = createMultiPromise(
    informationAction.removeJob,
    informationApi.removeJob,
    informationApi.getInfo
);
const removeSchool = createMultiPromise(
    informationAction.removeSchool,
    informationApi.removeSchool,
    informationApi.getInfo
);
const removeUniversity = createMultiPromise(
    informationAction.removeUniversity,
    informationApi.removeUniversity,
    informationApi.getInfo
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
