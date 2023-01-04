import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { chatApi } from "../../lib/index";
import { chatAction } from "../action/chat";

const room_list = createPromise(chatAction.roomList, chatApi.roomList);
const message_list = createPromise(chatAction.messageList, chatApi.messageList);
const create_group_room = createPromise(
    chatAction.createGroupRoom,
    chatApi.groupChattingRoom
);
const delete_room = createPromise(chatAction.deleteRoom, chatApi.deleteRoom);

export function* chatSaga() {
    yield takeEvery(chatAction.roomList, room_list);
    yield takeEvery(chatAction.messageList, message_list);
    yield takeEvery(chatAction.createGroupRoom, create_group_room);
    yield takeEvery(chatAction.deleteRoom, delete_room);
}
