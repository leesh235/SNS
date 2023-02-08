import { postAction } from "../action/post";
import { postsAction } from "../action/posts";
import {
    defaultReducer,
    modifyReducer,
    removeReducer,
} from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    loading: false,
    error: "",

    allPosts: {},
    myPosts: {},
    likePosts: {},
    friendsPosts: {},

    detail: null,
    like: null,
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case postAction.detail:
        case typeUtils(postAction.detail).success:
        case typeUtils(postAction.detail).error:
            return defaultReducer(
                postAction.detail,
                "detail",
                true
            )(state, action);

        case postAction.write:
        case typeUtils(postAction.write).success:
        case typeUtils(postAction.write).error:
            return defaultReducer(
                postAction.write,
                "myPosts",
                true
            )(state, action);

        case postAction.modify:
        case typeUtils(postAction.modify).success:
        case typeUtils(postAction.modify).error:
            return modifyReducer(
                postAction.modify,
                "myPosts",
                true
            )(state, action);

        case postAction.delete:
        case typeUtils(postAction.delete).success:
        case typeUtils(postAction.delete).error:
            return removeReducer(
                postAction.delete,
                "myPosts",
                true
            )(state, action);

        case postsAction.myPosts:
        case typeUtils(postsAction.myPosts).success:
        case typeUtils(postsAction.myPosts).error:
            return defaultReducer(
                postsAction.myPosts,
                "myPosts",
                true
            )(state, action);

        case postAction.like:
        case typeUtils(postAction.like).success:
        case typeUtils(postAction.like).error:
            return defaultReducer(postAction.like, "like", true)(state, action);

        case postsAction.allPosts:
        case typeUtils(postsAction.allPosts).success:
        case typeUtils(postsAction.allPosts).error:
            return defaultReducer(
                postsAction.allPosts,
                "allPosts",
                true
            )(state, action);

        case postsAction.likePosts:
        case typeUtils(postsAction.likePosts).success:
        case typeUtils(postsAction.likePosts).error:
            return defaultReducer(
                postsAction.likePosts,
                "likePosts",
                true
            )(state, action);

        case postsAction.friendsPosts:
        case typeUtils(postsAction.friendsPosts).success:
        case typeUtils(postsAction.friendsPosts).error:
            return defaultReducer(
                postsAction.friendsPosts,
                "friendsPosts",
                true
            )(state, action);

        default:
            return state;
    }
};

export default reducer;
