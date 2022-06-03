import {
    ROOMLIST,
    ROOMLIST_ERROR,
    ROOMLIST_SUCCESS,
    MESSAGELIST,
    MESSAGELIST_SUCCESS,
    MESSAGELIST_ERROR,
} from "../action/chat";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    roomList: reducerUtils.initial(null),
    messageList: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case ROOMLIST:
        case ROOMLIST_SUCCESS:
        case ROOMLIST_ERROR:
            return handleAsyncReducer(
                ROOMLIST,
                "roomList",
                true
            )(state, action);
        case MESSAGELIST:
        case MESSAGELIST_SUCCESS:
        case MESSAGELIST_ERROR:
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
