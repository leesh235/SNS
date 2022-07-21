import {
    POSTDETAILS,
    POSTDETAIL,
    WRITEPOST,
    MODIFYPOST,
    DELETEPOST,
    LIKE,
} from "../action/post";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    postDetails: reducerUtils.initial(null),
    postDetail: reducerUtils.initial(null),
    deletePost: reducerUtils.initial(null),
    modifyPost: reducerUtils.initial(null),
    writePost: reducerUtils.initial(null),
    like: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case POSTDETAILS:
        case typeUtils(POSTDETAILS).success:
        case typeUtils(POSTDETAILS).error:
            return handleAsyncReducer(
                POSTDETAILS,
                "postDetails",
                true
            )(state, action);
        case POSTDETAIL:
        case typeUtils(POSTDETAIL).success:
        case typeUtils(POSTDETAIL).error:
            return handleAsyncReducer(
                POSTDETAIL,
                "postDetail",
                true
            )(state, action);
        case WRITEPOST:
        case typeUtils(WRITEPOST).success:
        case typeUtils(WRITEPOST).error:
            return handleAsyncReducer(
                WRITEPOST,
                "writePost",
                true
            )(state, action);
        case MODIFYPOST:
        case typeUtils(MODIFYPOST).success:
        case typeUtils(MODIFYPOST).error:
            return handleAsyncReducer(
                MODIFYPOST,
                "modifyPost",
                true
            )(state, action);
        case DELETEPOST:
        case typeUtils(DELETEPOST).success:
        case typeUtils(DELETEPOST).error:
            return handleAsyncReducer(
                DELETEPOST,
                "deletePost",
                true
            )(state, action);
        case LIKE:
        case typeUtils(LIKE).error:
            return handleAsyncReducer(LIKE, "postDetails", true)(state, action);
        case typeUtils(LIKE).success:
            return {
                ...state,
                postDetails: {
                    ...state.postDetails,
                    data: {
                        ...state.postDetails.data,
                        [data.postId]: {
                            ...state.postDetails.data[data.postId],
                            likeStatus: data.status,
                            likequantity: data.quantity,
                        },
                    },
                },
            };
        default:
            return state;
    }
};

export default reducer;
