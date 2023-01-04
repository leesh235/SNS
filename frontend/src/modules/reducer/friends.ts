import { friendsAction } from "../action/friends";
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
        case friendsAction.isFriend:
        case typeUtils(friendsAction.isFriend).success:
        case typeUtils(friendsAction.isFriend).error:
            return handleAsyncReducer(
                friendsAction.isFriend,
                "isFriend",
                true
            )(state, action);
        case friendsAction.request:
        case typeUtils(friendsAction.request).success:
        case typeUtils(friendsAction.request).error:
            return handleAsyncReducer(
                friendsAction.request,
                "req",
                true
            )(state, action);
        case friendsAction.response:
        case typeUtils(friendsAction.response).success:
        case typeUtils(friendsAction.response).error:
            return handleAsyncReducer(
                friendsAction.response,
                "res",
                true
            )(state, action);
        case friendsAction.refuse:
        case typeUtils(friendsAction.refuse):
        case typeUtils(friendsAction.refuse):
            return handleAsyncReducer(
                friendsAction.refuse,
                "refuse",
                true
            )(state, action);
        case friendsAction.requestList:
        case typeUtils(friendsAction.requestList).success:
        case typeUtils(friendsAction.requestList).error:
            return handleAsyncReducer(
                friendsAction.requestList,
                "req_list",
                true
            )(state, action);
        case friendsAction.responseList:
        case typeUtils(friendsAction.responseList).success:
        case typeUtils(friendsAction.responseList).error:
            return handleAsyncReducer(
                friendsAction.responseList,
                "res_list",
                true
            )(state, action);
        case friendsAction.friendList:
        case typeUtils(friendsAction.friendList).success:
        case typeUtils(friendsAction.friendList).error:
            return handleAsyncReducer(
                friendsAction.friendList,
                "friend_list",
                true
            )(state, action);
        case friendsAction.allList:
        case typeUtils(friendsAction.allList).success:
        case typeUtils(friendsAction.allList).error:
            return handleAsyncReducer(
                friendsAction.allList,
                "all",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
