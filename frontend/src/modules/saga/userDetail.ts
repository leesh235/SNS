import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { userDetailApi } from "../../lib";
import { userDetailAction } from "../action/userDetail";

const get_ability = createPromise(
    userDetailAction.getAbility,
    userDetailApi.getAbility
);
const get_info = createPromise(userDetailAction.getInfo, userDetailApi.getInfo);
const set_ability = createPromise(
    userDetailAction.setAbility,
    userDetailApi.setAbility
);
const set_university = createPromise(
    userDetailAction.setUuniversity,
    userDetailApi.setUniversity
);
const set_school = createPromise(
    userDetailAction.setSchool,
    userDetailApi.setSchool
);
const set_number = createPromise(
    userDetailAction.setNumber,
    userDetailApi.setNumber
);
const set_address = createPromise(
    userDetailAction.setAddress,
    userDetailApi.setAddress
);
const delete_ability = createPromise(
    userDetailAction.deleteAbility,
    userDetailApi.deleteAbility
);
const delete_university = createPromise(
    userDetailAction.deleteUniversity,
    userDetailApi.deleteUniversity
);
const delete_school = createPromise(
    userDetailAction.deleteSchool,
    userDetailApi.deleteSchool
);

export function* userDetailSaga() {
    yield takeEvery(userDetailAction.getAbility, get_ability);
    yield takeEvery(userDetailAction.getInfo, get_info);
    yield takeEvery(userDetailAction.setAbility, set_ability);
    yield takeEvery(userDetailAction.setUuniversity, set_university);
    yield takeEvery(userDetailAction.setSchool, set_school);
    yield takeEvery(userDetailAction.setNumber, set_number);
    yield takeEvery(userDetailAction.setAddress, set_address);
    yield takeEvery(userDetailAction.deleteAbility, delete_ability);
    yield takeEvery(userDetailAction.deleteUniversity, delete_university);
    yield takeEvery(userDetailAction.deleteSchool, delete_school);
}
