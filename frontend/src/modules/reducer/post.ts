import {
    WRITEPOST,
    WRITEPOST_SUCCESS,
    WRITEPOST_ERROR,
    POSTDETAIL,
    POSTDETAIL_SUCCESS,
    POSTDETAIL_ERROR,
} from "../action/post";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
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
        default:
            return state;
    }
};

export default reducer;
