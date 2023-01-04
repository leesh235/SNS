import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { friendsApi } from "../../lib/index";
import { friendsAction } from "../action/friends";

const request = createPromise(friendsAction.request, friendsApi.requestFriend);
const response = createPromise(
    friendsAction.response,
    friendsApi.responseFriend
);
const request_list = createPromise(
    friendsAction.requestList,
    friendsApi.requestFriendList
);
const response_list = createPromise(
    friendsAction.responseList,
    friendsApi.responseFriendList
);
const friend_list = createPromise(
    friendsAction.friendList,
    friendsApi.friendList
);
const refuse = createPromise(friendsAction.refuse, friendsApi.refuseFriend);
const all_list = createPromise(friendsAction.allList, friendsApi.allFriendList);
const is_firend = createPromise(friendsAction.isFriend, friendsApi.isFriend);

export function* friendsSaga() {
    yield takeEvery(friendsAction.request, request);
    yield takeEvery(friendsAction.response, response);
    yield takeEvery(friendsAction.requestList, request_list);
    yield takeEvery(friendsAction.responseList, response_list);
    yield takeEvery(friendsAction.friendList, friend_list);
    yield takeEvery(friendsAction.refuse, refuse);
    yield takeEvery(friendsAction.allList, all_list);
    yield takeEvery(friendsAction.isFriend, is_firend);
}
