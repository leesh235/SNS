import { postAction } from "../action/post";
import { postsAction } from "../action/posts";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    allPosts: reducerUtils.initial(null),
    myPosts: reducerUtils.initial(null),
    likePosts: reducerUtils.initial(null),
    friendsPosts: reducerUtils.initial(null),

    write: reducerUtils.initial(null),
    detail: reducerUtils.initial(null),
    modify: reducerUtils.initial(null),
    delete: reducerUtils.initial(null),
    like: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case postAction.detail:
        case typeUtils(postAction.detail).success:
        case typeUtils(postAction.detail).error:
            return handleAsyncReducer(
                postAction.detail,
                "detail",
                true
            )(state, action);

        case postAction.write:
        case typeUtils(postAction.write).success:
        case typeUtils(postAction.write).error:
            return handleAsyncReducer(
                postAction.write,
                "write",
                true
            )(state, action);

        case postAction.modify:
        case typeUtils(postAction.modify).success:
        case typeUtils(postAction.modify).error:
            return handleAsyncReducer(
                postAction.modify,
                "modify",
                true
            )(state, action);

        case postAction.delete:
        case typeUtils(postAction.delete).success:
        case typeUtils(postAction.delete).error:
            return handleAsyncReducer(
                postAction.delete,
                "delete",
                true
            )(state, action);

        case postAction.like:
        case typeUtils(postAction.like).success:
        case typeUtils(postAction.like).error:
            return handleAsyncReducer(
                postAction.like,
                "like",
                true
            )(state, action);

        case postsAction.allPosts:
        case typeUtils(postsAction.allPosts).success:
        case typeUtils(postsAction.allPosts).error:
            return handleAsyncReducer(
                postsAction.allPosts,
                "allPosts",
                true
            )(state, action);

        case postsAction.likePosts:
        case typeUtils(postsAction.likePosts).success:
        case typeUtils(postsAction.likePosts).error:
            return handleAsyncReducer(
                postsAction.likePosts,
                "likePosts",
                true
            )(state, action);

        case postsAction.myPosts:
        case typeUtils(postsAction.myPosts).success:
        case typeUtils(postsAction.myPosts).error:
            return handleAsyncReducer(
                postsAction.myPosts,
                "myPosts",
                true
            )(state, action);

        case postsAction.friendsPosts:
        case typeUtils(postsAction.friendsPosts).success:
        case typeUtils(postsAction.friendsPosts).error:
            return handleAsyncReducer(
                postsAction.friendsPosts,
                "friendsPosts",
                true
            )(state, action);

        default:
            return state;
    }
};

export default reducer;
