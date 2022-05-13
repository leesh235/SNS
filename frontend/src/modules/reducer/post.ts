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
    COMMENTQUANTITY,
    COMMENTQUANTITY_ERROR,
    COMMENTQUANTITY_SUCCESS,
    LIKEQUANTITY,
    LIKEQUANTITY_ERROR,
    LIKEQUANTITY_SUCCESS,
} from "../action/post";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    deletePost: reducerUtils.initial(null),
    modifyPost: reducerUtils.initial(null),
    writePost: reducerUtils.initial(null),
    postDetail: reducerUtils.initial(null),
    commentQuantity: reducerUtils.initial(null),
    likeQuantity: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case COMMENTQUANTITY:
        case COMMENTQUANTITY_SUCCESS:
        case COMMENTQUANTITY_ERROR:
            return handleAsyncReducer(
                COMMENTQUANTITY,
                "commentQuantity",
                true
            )(state, action);
        case LIKEQUANTITY:
        case LIKEQUANTITY_SUCCESS:
        case LIKEQUANTITY_ERROR:
            return handleAsyncReducer(
                LIKEQUANTITY,
                "likeQuantity",
                true
            )(state, action);
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
        default:
            return state;
    }
};

export default reducer;
