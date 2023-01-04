import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { friendsApi } from "../../lib/index";
import {
    REQUEST,
    RESPONSE,
    REQUESTLIST,
    RESPONSELIST,
    FRIENDSLIST,
    REFUSE,
    ALLLIST,
    ISFRIEND,
} from "../action/friends";

const request = createPromise(REQUEST, friendsApi.requestFriend);
const response = createPromise(RESPONSE, friendsApi.responseFriend);
const request_list = createPromise(REQUESTLIST, friendsApi.requestFriendList);
const response_list = createPromise(
    RESPONSELIST,
    friendsApi.responseFriendList
);
const friend_list = createPromise(FRIENDSLIST, friendsApi.friendList);
const refuse = createPromise(REFUSE, friendsApi.refuseFriend);
const all_list = createPromise(ALLLIST, friendsApi.allFriendList);
const is_firend = createPromise(ISFRIEND, friendsApi.isFriend);

export function* friendsSaga() {
    yield takeEvery(REQUEST, request);
    yield takeEvery(RESPONSE, response);
    yield takeEvery(REQUESTLIST, request_list);
    yield takeEvery(RESPONSELIST, response_list);
    yield takeEvery(FRIENDSLIST, friend_list);
    yield takeEvery(REFUSE, refuse);
    yield takeEvery(ALLLIST, all_list);
    yield takeEvery(ISFRIEND, is_firend);
}
