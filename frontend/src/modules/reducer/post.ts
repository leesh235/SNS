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
} from "../action/post";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    deletePost: reducerUtils.initial(null),
    modifyPost: reducerUtils.initial(null),
    writePost: reducerUtils.initial(null),
    postDetail: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case WRITEPOST:
            return {
                ...state,
                writePost: reducerUtils.loading(state.writePost.data),
            };
        case POSTDETAIL:
            return {
                ...state,
                postDetail: reducerUtils.loading(state.postDetail.data),
            };
        case MODIFYPOST:
            return {
                ...state,
                modifyPost: reducerUtils.loading(state.modifyPost.data),
            };
        case DELETEPOST:
            return {
                ...state,
                deletePost: reducerUtils.loading(state.deletePost.data),
            };
        case WRITEPOST_SUCCESS:
            return {
                ...state,
                writePost: reducerUtils.success(data),
            };
        case POSTDETAIL_SUCCESS:
            return {
                ...state,
                postDetail: reducerUtils.success(data),
            };
        case MODIFYPOST_SUCCESS:
            return {
                ...state,
                modifyPost: reducerUtils.success(data),
            };
        case DELETEPOST_SUCCESS:
            return {
                ...state,
                deletePost: reducerUtils.success(data),
            };
        case WRITEPOST_ERROR:
            return {
                ...state,
                writePost: reducerUtils.error(data),
            };
        case POSTDETAIL_ERROR:
            return {
                ...state,
                postDetail: reducerUtils.error(data),
            };
        case MODIFYPOST_ERROR:
            return {
                ...state,
                modifyPost: reducerUtils.error(data),
            };
        case DELETEPOST_ERROR:
            return {
                ...state,
                deletePost: reducerUtils.success(data),
            };
        default:
            return state;
    }
};

export default reducer;
