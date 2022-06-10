import {
    WRITEPOST,
    POSTDETAIL,
    MODIFYPOST,
    DELETEPOST,
    LIKE,
} from "../action/post";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    deletePost: reducerUtils.initial(null),
    modifyPost: reducerUtils.initial(null),
    writePost: reducerUtils.initial(null),
    postDetail: reducerUtils.initial(null),
    like: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type } = action;
    switch (type) {
        case WRITEPOST:
        case typeUtils(WRITEPOST).success:
        case typeUtils(WRITEPOST).error:
            return handleAsyncReducer(
                WRITEPOST,
                "writePost",
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
        case typeUtils(LIKE).success:
        case typeUtils(LIKE).error:
            return handleAsyncReducer(LIKE, "like", true)(state, action);
        default:
            return state;
    }
};

export default reducer;
