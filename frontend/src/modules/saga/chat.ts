import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    getRoomList,
    getMessageList,
    setGroupChattingRoom,
    deleteRoom,
} from "../../lib/chat";
import {
    ROOMLIST,
    MESSAGELIST,
    CREATEGROUPROOM,
    DELETEROOM,
} from "../action/chat";

const room_list = createPromise(ROOMLIST, getRoomList);
const message_list = createPromise(MESSAGELIST, getMessageList);
const create_group_room = createPromise(CREATEGROUPROOM, setGroupChattingRoom);
const delete_room = createPromise(DELETEROOM, deleteRoom);

export function* chatSaga() {
    yield takeEvery(ROOMLIST, room_list);
    yield takeEvery(MESSAGELIST, message_list);
    yield takeEvery(CREATEGROUPROOM, create_group_room);
    yield takeEvery(DELETEROOM, delete_room);
}
