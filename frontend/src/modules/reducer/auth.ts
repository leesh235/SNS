import { authAction } from "../action/auth";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    join: reducerUtils.initial(null),
    login: reducerUtils.initial(null),
    logout: reducerUtils.initial(null),
    refresh: reducerUtils.initial(null),
    findPassword: reducerUtils.initial(null),
    verifyCodeNumber: reducerUtils.initial(null),
    modifyPassword: reducerUtils.initial(null),
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
        case authAction.findPassword:
        case typeUtils(authAction.findPassword).success:
        case typeUtils(authAction.findPassword).error:
            return handleAsyncReducer(
                authAction.findPassword,
                "findPassword",
                true
            )(state, action);
        case authAction.verifyCodeNumber:
        case typeUtils(authAction.verifyCodeNumber).success:
        case typeUtils(authAction.verifyCodeNumber).error:
            return handleAsyncReducer(
                authAction.verifyCodeNumber,
                "verifyCodeNumber",
                true
            )(state, action);
        case authAction.modifyPassword:
        case typeUtils(authAction.modifyPassword).success:
        case typeUtils(authAction.modifyPassword).error:
            return handleAsyncReducer(
                authAction.modifyPassword,
                "modifyPassword",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
