import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import { postsApi } from "../../lib";
import { ALLPOSTS, MYPOSTS, LIKEPOSTS, FRIENDSPOSTS } from "../action/posts";

const posts = createPromise(ALLPOSTS, postsApi.posts);
const myPosts = createPromise(MYPOSTS, postsApi.myPosts);
const likePosts = createPromise(LIKEPOSTS, postsApi.likePosts);
const friendsPosts = createPromise(FRIENDSPOSTS, postsApi.friendsPosts);

export function* postsSaga() {
    yield takeEvery(ALLPOSTS, posts);
    yield takeEvery(MYPOSTS, myPosts);
    yield takeEvery(LIKEPOSTS, likePosts);
    yield takeEvery(FRIENDSPOSTS, friendsPosts);
}
