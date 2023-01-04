import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { postsApi } from "../../lib";
import { postsAction } from "../action/posts";

const posts = createPromise(postsAction.allPosts, postsApi.posts);
const myPosts = createPromise(postsAction.myPosts, postsApi.myPosts);
const likePosts = createPromise(postsAction.likePosts, postsApi.likePosts);
const friendsPosts = createPromise(
    postsAction.friendsPosts,
    postsApi.friendsPosts
);

export function* postsSaga() {
    yield takeEvery(postsAction.allPosts, posts);
    yield takeEvery(postsAction.myPosts, myPosts);
    yield takeEvery(postsAction.likePosts, likePosts);
    yield takeEvery(postsAction.friendsPosts, friendsPosts);
}
