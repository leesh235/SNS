import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    getRoomList,
    getMessageList,
    setGroupChattingRoom,
} from "../../lib/chat";
import { ROOMLIST, MESSAGELIST, CREATEGROUPROOM } from "../action/chat";

const room_list = createPromise(ROOMLIST, getRoomList);
const message_list = createPromise(MESSAGELIST, getMessageList);
const create_group_room = createPromise(CREATEGROUPROOM, setGroupChattingRoom);

export function* chatSaga() {
    yield takeEvery(ROOMLIST, room_list);
    yield takeEvery(MESSAGELIST, message_list);
    yield takeEvery(CREATEGROUPROOM, create_group_room);
}
