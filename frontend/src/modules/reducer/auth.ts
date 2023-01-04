import { authAction } from "../action/auth";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    join: reducerUtils.initial(null),
    login: reducerUtils.initial(null),
    logout: reducerUtils.initial(null),
    refresh: reducerUtils.initial(null),
    find: reducerUtils.initial(null),
    verify: reducerUtils.initial(null),
    modify: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type } = action;
    switch (type) {
        case authAction.join:
        case typeUtils(authAction.join).success:
        case typeUtils(authAction.join).error:
            return handleAsyncReducer(
                authAction.join,
                "join",
                true
            )(state, action);
        case authAction.login:
        case typeUtils(authAction.login).success:
        case typeUtils(authAction.login).error:
            return handleAsyncReducer(
                authAction.login,
                "login",
                true
            )(state, action);
        case authAction.logout:
        case typeUtils(authAction.logout).success:
        case typeUtils(authAction.logout).error:
            return handleAsyncReducer(
                authAction.logout,
                "logout",
                true
            )(state, action);
        case authAction.refresh:
        case typeUtils(authAction.refresh).success:
        case typeUtils(authAction.refresh).error:
            return handleAsyncReducer(
                authAction.refresh,
                "refresh",
                true
            )(state, action);
        case authAction.find:
        case typeUtils(authAction.find).success:
        case typeUtils(authAction.find).error:
            return handleAsyncReducer(
                authAction.find,
                "find",
                true
            )(state, action);
        case authAction.verify:
        case typeUtils(authAction.verify).success:
        case typeUtils(authAction.verify).error:
            return handleAsyncReducer(
                authAction.verify,
                "verify",
                true
            )(state, action);
        case authAction.modify:
        case typeUtils(authAction.modify).success:
        case typeUtils(authAction.modify).error:
            return handleAsyncReducer(
                authAction.modify,
                "modify",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
