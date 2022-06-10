import { ROOMLIST, MESSAGELIST } from "../action/chat";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    roomList: reducerUtils.initial(null),
    messageList: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type } = action;
    switch (type) {
        case ROOMLIST:
        case typeUtils(ROOMLIST).success:
        case typeUtils(ROOMLIST).error:
            return handleAsyncReducer(
                ROOMLIST,
                "roomList",
                true
            )(state, action);
        case MESSAGELIST:
        case typeUtils(MESSAGELIST).success:
        case typeUtils(MESSAGELIST).error:
            return handleAsyncReducer(
                MESSAGELIST,
                "messageList",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
