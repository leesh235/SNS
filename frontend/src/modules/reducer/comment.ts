import {
    COMMENTLIST,
    COMMENTLIST_SUCCESS,
    COMMENTLIST_ERROR,
    WRITE,
    WRITE_SUCCESS,
    WRITE_ERROR,
    MODIFY,
    MODIFY_SUCCESS,
    MODIFY_ERROR,
    DELETE,
    DELETE_SUCCESS,
    DELETE_ERROR,
} from "../action/comment";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    commentList: reducerUtils.initial(null),
    write: reducerUtils.initial(null),
    modify: reducerUtils.initial(null),
    delete: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case COMMENTLIST:
        case COMMENTLIST_SUCCESS:
        case COMMENTLIST_ERROR:
            return handleAsyncReducer(
                COMMENTLIST,
                "commentList",
                true
            )(state, action);
        case WRITE:
        case WRITE_SUCCESS:
        case WRITE_ERROR:
            return handleAsyncReducer(WRITE, "write", true)(state, action);
        case MODIFY:
        case MODIFY_SUCCESS:
        case MODIFY_ERROR:
            return handleAsyncReducer(MODIFY, "modify", true)(state, action);
        case DELETE:
        case DELETE_SUCCESS:
        case DELETE_ERROR:
            return handleAsyncReducer(DELETE, "delete", true)(state, action);
        default:
            return state;
    }
};

export default reducer;
