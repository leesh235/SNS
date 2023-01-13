import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { friendsApi } from "../../lib/index";
import { friendsAction } from "../action/friends";

const request = createPromise(friendsAction.request, friendsApi.requestFriend);
const response = createPromise(
    friendsAction.response,
    friendsApi.responseFriend
);
const requestList = createPromise(
    friendsAction.requestList,
    friendsApi.requestList
);
const responseList = createPromise(
    friendsAction.responseList,
    friendsApi.responseList
);
const friendList = createPromise(
    friendsAction.friendList,
    friendsApi.friendList
);
const refuse = createPromise(friendsAction.refuse, friendsApi.refuseFriend);
const allList = createPromise(friendsAction.allList, friendsApi.allList);
const isFriend = createPromise(friendsAction.isFriend, friendsApi.isFriend);

export function* friendsSaga() {
    yield takeEvery(friendsAction.request, request);
    yield takeEvery(friendsAction.response, response);
    yield takeEvery(friendsAction.requestList, requestList);
    yield takeEvery(friendsAction.responseList, responseList);
    yield takeEvery(friendsAction.friendList, friendList);
    yield takeEvery(friendsAction.refuse, refuse);
    yield takeEvery(friendsAction.allList, allList);
    yield takeEvery(friendsAction.isFriend, isFriend);
}
