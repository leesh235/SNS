import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    requestFriend,
    responseFriend,
    requestFriendList,
    responseFriendList,
    friendList,
} from "../../lib/friends";
import {
    REQUEST,
    RESPONSE,
    REQUESTLIST,
    RESPONSELIST,
    FRIENDSLIST,
} from "../action/friends";

const request = createPromise(REQUEST, requestFriend);
const response = createPromise(RESPONSE, responseFriend);
const request_list = createPromise(REQUESTLIST, requestFriendList);
const response_list = createPromise(RESPONSELIST, responseFriendList);
const friend_list = createPromise(FRIENDSLIST, friendList);

export function* friendsSaga() {
    yield takeEvery(REQUEST, request);
    yield takeEvery(RESPONSE, response);
    yield takeEvery(REQUESTLIST, request_list);
    yield takeEvery(RESPONSELIST, response_list);
    yield takeEvery(FRIENDSLIST, friend_list);
}
