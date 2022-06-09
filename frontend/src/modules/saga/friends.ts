import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    requestFriend,
    responseFriend,
    requestFriendList,
    responseFriendList,
    friendList,
    refuseFriend,
    allFriendList,
    isFriend,
} from "../../lib/friends";
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

const request = createPromise(REQUEST, requestFriend);
const response = createPromise(RESPONSE, responseFriend);
const request_list = createPromise(REQUESTLIST, requestFriendList);
const response_list = createPromise(RESPONSELIST, responseFriendList);
const friend_list = createPromise(FRIENDSLIST, friendList);
const refuse = createPromise(REFUSE, refuseFriend);
const all_list = createPromise(ALLLIST, allFriendList);
const is_firend = createPromise(ISFRIEND, isFriend);

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
