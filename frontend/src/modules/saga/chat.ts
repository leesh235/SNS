import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { getRoomList } from "../../lib/chat";
import { ROOMLIST } from "../action/chat";

const room_list = createPromise(ROOMLIST, getRoomList);

export function* chatSaga() {
    yield takeEvery(ROOMLIST, room_list);
}
