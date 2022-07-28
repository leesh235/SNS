import { ALLPOSTS, MYPOSTS, LIKEPOSTS, FRIENDSPOSTS } from "../action/posts";
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
        case ALLPOSTS:
        case typeUtils(ALLPOSTS).error:
            return handleAsyncReducer(
                ALLPOSTS,
                "allPosts",
                true
            )(state, action);
        case typeUtils(ALLPOSTS).success:
            return {
                ...state,
                allPosts: {
                    ...state.allPosts,
                    loading: false,
                    data: [...state.allPosts.data, ...data],
                },
            };
        case MYPOSTS:
        case typeUtils(MYPOSTS).success:
        case typeUtils(MYPOSTS).error:
            return handleAsyncReducer(MYPOSTS, "myPosts", true)(state, action);
        case LIKEPOSTS:
        case typeUtils(LIKEPOSTS).success:
        case typeUtils(LIKEPOSTS).error:
            return handleAsyncReducer(
                LIKEPOSTS,
                "likePosts",
                true
            )(state, action);
        case FRIENDSPOSTS:
        case typeUtils(FRIENDSPOSTS).success:
        case typeUtils(FRIENDSPOSTS).error:
            return handleAsyncReducer(
                FRIENDSPOSTS,
                "friendsPosts",
                true
            )(state, action);
        case FRIENDSPOSTS:
        case typeUtils(FRIENDSPOSTS).success:
        case typeUtils(FRIENDSPOSTS).error:
            return handleAsyncReducer(
                FRIENDSPOSTS,
                "friendsPosts",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
