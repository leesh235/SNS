import {
    WRITEPOST,
    WRITEPOST_SUCCESS,
    WRITEPOST_ERROR,
    POSTDETAIL,
    POSTDETAIL_SUCCESS,
    POSTDETAIL_ERROR,
    MODIFYPOST,
    MODIFYPOST_SUCCESS,
    MODIFYPOST_ERROR,
    DELETEPOST,
    DELETEPOST_SUCCESS,
    DELETEPOST_ERROR,
    LIKE,
    LIKE_SUCCESS,
    LIKE_ERROR,
} from "../action/post";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    deletePost: reducerUtils.initial(null),
    modifyPost: reducerUtils.initial(null),
    writePost: reducerUtils.initial(null),
    postDetail: reducerUtils.initial(null),
    like: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case WRITEPOST:
        case WRITEPOST_SUCCESS:
        case WRITEPOST_ERROR:
            return handleAsyncReducer(
                WRITEPOST,
                "writePost",
                true
            )(state, action);
        case POSTDETAIL:
        case POSTDETAIL_SUCCESS:
        case POSTDETAIL_ERROR:
            return handleAsyncReducer(
                POSTDETAIL,
                "postDetail",
                true
            )(state, action);
        case MODIFYPOST:
        case MODIFYPOST_SUCCESS:
        case MODIFYPOST_ERROR:
            return handleAsyncReducer(
                MODIFYPOST,
                "modifyPost",
                true
            )(state, action);

        case DELETEPOST:
        case DELETEPOST_SUCCESS:
        case DELETEPOST_ERROR:
            return handleAsyncReducer(
                DELETEPOST,
                "deletePost",
                true
            )(state, action);
        case LIKE:
        case LIKE_SUCCESS:
        case LIKE_ERROR:
            return handleAsyncReducer(LIKE, "like", true)(state, action);
        default:
            return state;
    }
};

export default reducer;
