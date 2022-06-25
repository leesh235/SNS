import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    getAbility,
    getInfo,
    setAbility,
    setAddress,
    setNumber,
    setSchool,
    setUniversity,
    deleteAbility,
    deleteUniversity,
    deleteSchool,
} from "../../lib/userDetail";
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

const get_ability = createPromise(GETABILITY, getAbility);
const get_info = createPromise(GETINFO, getInfo);
const set_ability = createPromise(SETABILITY, setAbility);
const set_university = createPromise(SETUNIVERSITY, setUniversity);
const set_school = createPromise(SETSCHOOL, setSchool);
const set_number = createPromise(SETNUMBER, setNumber);
const set_address = createPromise(SETADDRESS, setAddress);
const delete_ability = createPromise(DELETEABILITY, deleteAbility);
const delete_university = createPromise(DELETEUNIVERSITY, deleteUniversity);
const delete_school = createPromise(DELETESCHOOL, deleteSchool);

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
