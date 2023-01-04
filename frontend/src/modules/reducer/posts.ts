import { postsAction } from "../action/posts";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    allPosts: reducerUtils.initial([]),
    myPosts: reducerUtils.initial([]),
    likePosts: reducerUtils.initial([]),
    friendsPosts: reducerUtils.initial([]),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case postsAction.allPosts:
        case typeUtils(postsAction.allPosts).error:
            return handleAsyncReducer(
                postsAction.allPosts,
                "allPosts",
                true
            )(state, action);
        case typeUtils(postsAction.allPosts).success:
            return {
                ...state,
                allPosts: {
                    ...state.allPosts,
                    loading: false,
                    data,
                },
            };
        case postsAction.myPosts:
        case typeUtils(postsAction.myPosts).success:
        case typeUtils(postsAction.myPosts).error:
            return handleAsyncReducer(
                postsAction.myPosts,
                "myPosts",
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
