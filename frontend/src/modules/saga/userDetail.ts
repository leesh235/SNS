import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { userDetailApi } from "../../lib";
import {
    GETABILITY,
    GETINFO,
    SETABILITY,
    SETADDRESS,
    SETNUMBER,
    SETSCHOOL,
    SETUNIVERSITY,
    DELETEABILITY,
    DELETESCHOOL,
    DELETEUNIVERSITY,
} from "../action/userDetail";

const get_ability = createPromise(GETABILITY, userDetailApi.getAbility);
const get_info = createPromise(GETINFO, userDetailApi.getInfo);
const set_ability = createPromise(SETABILITY, userDetailApi.setAbility);
const set_university = createPromise(
    SETUNIVERSITY,
    userDetailApi.setUniversity
);
const set_school = createPromise(SETSCHOOL, userDetailApi.setSchool);
const set_number = createPromise(SETNUMBER, userDetailApi.setNumber);
const set_address = createPromise(SETADDRESS, userDetailApi.setAddress);
const delete_ability = createPromise(
    DELETEABILITY,
    userDetailApi.deleteAbility
);
const delete_university = createPromise(
    DELETEUNIVERSITY,
    userDetailApi.deleteUniversity
);
const delete_school = createPromise(DELETESCHOOL, userDetailApi.deleteSchool);

export function* userDetailSaga() {
    yield takeEvery(GETABILITY, get_ability);
    yield takeEvery(GETINFO, get_info);
    yield takeEvery(SETABILITY, set_ability);
    yield takeEvery(SETUNIVERSITY, set_university);
    yield takeEvery(SETSCHOOL, set_school);
    yield takeEvery(SETNUMBER, set_number);
    yield takeEvery(SETADDRESS, set_address);
    yield takeEvery(DELETEABILITY, delete_ability);
    yield takeEvery(DELETEUNIVERSITY, delete_university);
    yield takeEvery(DELETESCHOOL, delete_school);
}
