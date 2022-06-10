import {
    REQUEST,
    RESPONSE,
    REQUESTLIST,
    RESPONSELIST,
    FRIENDSLIST,
    REFUSE,
    ALLLIST,
    ISFRIEND,
} from "../action/friends";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    req: reducerUtils.initial(null),
    res: reducerUtils.initial(null),
    req_list: reducerUtils.initial(null),
    res_list: reducerUtils.initial(null),
    friend_list: reducerUtils.initial(null),
    refuse: reducerUtils.initial(null),
    all: reducerUtils.initial(null),
    isFriend: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type } = action;
    switch (type) {
        case ISFRIEND:
        case typeUtils(ISFRIEND).success:
        case typeUtils(ISFRIEND).error:
            return handleAsyncReducer(
                ISFRIEND,
                "isFriend",
                true
            )(state, action);
        case REQUEST:
        case typeUtils(REQUEST).success:
        case typeUtils(REQUEST).error:
            return handleAsyncReducer(REQUEST, "req", true)(state, action);
        case RESPONSE:
        case typeUtils(RESPONSE).success:
        case typeUtils(RESPONSE).error:
            return handleAsyncReducer(RESPONSE, "res", true)(state, action);
        case REFUSE:
        case typeUtils(REFUSE):
        case typeUtils(REFUSE):
            return handleAsyncReducer(REFUSE, "refuse", true)(state, action);
        case REQUESTLIST:
        case typeUtils(REQUESTLIST).success:
        case typeUtils(REQUESTLIST).error:
            return handleAsyncReducer(
                REQUESTLIST,
                "req_list",
                true
            )(state, action);
        case RESPONSELIST:
        case typeUtils(RESPONSELIST).success:
        case typeUtils(RESPONSELIST).error:
            return handleAsyncReducer(
                RESPONSELIST,
                "res_list",
                true
            )(state, action);
        case FRIENDSLIST:
        case typeUtils(FRIENDSLIST).success:
        case typeUtils(FRIENDSLIST).error:
            return handleAsyncReducer(
                FRIENDSLIST,
                "friend_list",
                true
            )(state, action);
        case ALLLIST:
        case typeUtils(ALLLIST).success:
        case typeUtils(ALLLIST).error:
            return handleAsyncReducer(ALLLIST, "all", true)(state, action);
        default:
            return state;
    }
};

export default reducer;
