import {
    REQUEST,
    REQUEST_SUCCESS,
    REQUEST_ERROR,
    RESPONSE,
    RESPONSE_SUCCESS,
    RESPONSE_ERROR,
    REQUESTLIST,
    REQUESTLIST_SUCCESS,
    REQUESTLIST_ERROR,
    RESPONSELIST,
    RESPONSELIST_SUCCESS,
    RESPONSELIST_ERROR,
    FRIENDSLIST,
    FRIENDSLIST_SUCCESS,
    FRIENDSLIST_ERROR,
} from "../action/friends";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    req: reducerUtils.initial(null),
    res: reducerUtils.initial(null),
    req_list: reducerUtils.initial(null),
    res_list: reducerUtils.initial(null),
    friend_list: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case REQUEST:
        case REQUEST_SUCCESS:
        case REQUEST_ERROR:
            return handleAsyncReducer(REQUEST, "req", true)(state, action);
        case RESPONSE:
        case RESPONSE_SUCCESS:
        case RESPONSE_ERROR:
            return handleAsyncReducer(RESPONSE, "res", true)(state, action);
        case REQUESTLIST:
        case REQUESTLIST_SUCCESS:
        case REQUESTLIST_ERROR:
            return handleAsyncReducer(
                REQUESTLIST,
                "req_list",
                true
            )(state, action);
        case RESPONSELIST:
        case RESPONSELIST_SUCCESS:
        case RESPONSELIST_ERROR:
            return handleAsyncReducer(
                RESPONSELIST,
                "res_list",
                true
            )(state, action);
        case FRIENDSLIST:
        case FRIENDSLIST_SUCCESS:
        case FRIENDSLIST_ERROR:
            return handleAsyncReducer(
                FRIENDSLIST,
                "friend_list",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
