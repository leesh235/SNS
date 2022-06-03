import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { getRoomList, getMessageList } from "../../lib/chat";
import { ROOMLIST, MESSAGELIST } from "../action/chat";

const room_list = createPromise(ROOMLIST, getRoomList);
const message_list = createPromise(MESSAGELIST, getMessageList);

export function* chatSaga() {
    yield takeEvery(ROOMLIST, room_list);
    yield takeEvery(MESSAGELIST, message_list);
}
