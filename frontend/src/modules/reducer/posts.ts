import {
    ALLPOSTS,
    ALLPOSTS_SUCCESS,
    ALLPOSTS_ERROR,
    MYPOSTS,
    MYPOSTS_SUCCESS,
    MYPOSTS_ERROR,
    LIKEPOSTS,
    LIKEPOSTS_ERROR,
    LIKEPOSTS_SUCCESS,
    FRIENDSPOSTS,
    FRIENDSPOSTS_ERROR,
    FRIENDSPOSTS_SUCCESS,
} from "../action/posts";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    allPosts: reducerUtils.initial(null),
    myPosts: reducerUtils.initial(null),
    likePosts: reducerUtils.initial(null),
    friendsPosts: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case ALLPOSTS:
        case ALLPOSTS_SUCCESS:
        case ALLPOSTS_ERROR:
            return handleAsyncReducer(
                ALLPOSTS,
                "allPosts",
                true
            )(state, action);
        case MYPOSTS:
        case MYPOSTS_SUCCESS:
        case MYPOSTS_ERROR:
            return handleAsyncReducer(MYPOSTS, "myPosts", true)(state, action);
        case LIKEPOSTS:
        case LIKEPOSTS_SUCCESS:
        case LIKEPOSTS_ERROR:
            return handleAsyncReducer(
                LIKEPOSTS,
                "likePosts",
                true
            )(state, action);
        case FRIENDSPOSTS:
        case FRIENDSPOSTS_SUCCESS:
        case FRIENDSPOSTS_ERROR:
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
