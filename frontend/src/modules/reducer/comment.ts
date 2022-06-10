import { COMMENTLIST, WRITE, MODIFY, DELETE } from "../action/comment";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    commentList: reducerUtils.initial(null),
    write: reducerUtils.initial(null),
    modify: reducerUtils.initial(null),
    delete: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type } = action;
    switch (type) {
        case COMMENTLIST:
        case typeUtils(COMMENTLIST).success:
        case typeUtils(COMMENTLIST).error:
            return handleAsyncReducer(
                COMMENTLIST,
                "commentList",
                true
            )(state, action);
        case WRITE:
        case typeUtils(WRITE).success:
        case typeUtils(WRITE).error:
            return handleAsyncReducer(WRITE, "write", true)(state, action);
        case MODIFY:
        case typeUtils(MODIFY).success:
        case typeUtils(MODIFY).error:
            return handleAsyncReducer(MODIFY, "modify", true)(state, action);
        case DELETE:
        case typeUtils(DELETE).success:
        case typeUtils(DELETE).error:
            return handleAsyncReducer(DELETE, "delete", true)(state, action);
        default:
            return state;
    }
};

export default reducer;
