import { chatAction } from "../action/comment";
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
        case chatAction.list:
        case typeUtils(chatAction.list).success:
        case typeUtils(chatAction.list).error:
            return handleAsyncReducer(
                chatAction.list,
                "commentList",
                true
            )(state, action);
        case chatAction.write:
        case typeUtils(chatAction.write).success:
        case typeUtils(chatAction.write).error:
            return handleAsyncReducer(
                chatAction.write,
                "write",
                true
            )(state, action);
        case chatAction.modify:
        case typeUtils(chatAction.modify).success:
        case typeUtils(chatAction.modify).error:
            return handleAsyncReducer(
                chatAction.modify,
                "modify",
                true
            )(state, action);
        case chatAction.delete:
        case typeUtils(chatAction.delete).success:
        case typeUtils(chatAction.delete).error:
            return handleAsyncReducer(
                chatAction.delete,
                "delete",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
