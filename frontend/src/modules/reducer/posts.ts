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
            return {
                ...state,
                allPosts: reducerUtils.loading(state.allPosts),
            };
        case MYPOSTS:
            return {
                ...state,
                myPosts: reducerUtils.loading(state.myPosts),
            };
        case LIKEPOSTS:
            return {
                ...state,
                likePosts: reducerUtils.loading(state.likePosts),
            };
        case FRIENDSPOSTS:
            return {
                ...state,
                friendsPosts: reducerUtils.loading(state.friendsPosts),
            };
        case ALLPOSTS_SUCCESS:
            return {
                ...state,
                allPosts: reducerUtils.success(data),
            };
        case MYPOSTS_SUCCESS:
            return {
                ...state,
                myPosts: reducerUtils.success(data),
            };
        case LIKEPOSTS_SUCCESS:
            return {
                ...state,
                likePosts: reducerUtils.success(data),
            };
        case FRIENDSPOSTS_SUCCESS:
            return {
                ...state,
                friendsPosts: reducerUtils.success(data),
            };
        case ALLPOSTS_ERROR:
            return {
                ...state,
                allPosts: reducerUtils.error(data),
            };
        case MYPOSTS_ERROR:
            return {
                ...state,
                myPosts: reducerUtils.error(data),
            };
        case LIKEPOSTS_ERROR:
            return {
                ...state,
                likePosts: reducerUtils.error(data),
            };
        case FRIENDSPOSTS_ERROR:
            return {
                ...state,
                friendsPosts: reducerUtils.error(data),
            };

        default:
            return state;
    }
};

export default reducer;
