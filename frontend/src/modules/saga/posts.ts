import { createPromise } from "../../utils/asyncUtils";
import { takeEvery } from "redux-saga/effects";
import {
    getPostsFunc,
    getMyPostsFunc,
    getBookmarkPostsFunc,
    getFriendsPostsFunc,
    getLikePostsFunc,
} from "../../lib/posts";
import { ALLPOSTS, MYPOSTS, LIKEPOSTS, FRIENDSPOSTS } from "../action/posts";

const posts = createPromise(ALLPOSTS, getPostsFunc);
const myPosts = createPromise(MYPOSTS, getMyPostsFunc);
const likePosts = createPromise(LIKEPOSTS, getLikePostsFunc);
const friendsPosts = createPromise(FRIENDSPOSTS, getFriendsPostsFunc);

export function* postsSaga() {
    yield takeEvery(ALLPOSTS, posts);
    yield takeEvery(MYPOSTS, myPosts);
    yield takeEvery(LIKEPOSTS, likePosts);
    yield takeEvery(FRIENDSPOSTS, friendsPosts);
}
