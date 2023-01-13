import { userAction } from "../action/profile";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    loginInfo: reducerUtils.initial(null),
    profile: reducerUtils.initial(null),
    introduce: reducerUtils.initial(null),
    profileImage: reducerUtils.initial(null),
    coverImage: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case userAction.loginInfo:
        case typeUtils(userAction.loginInfo).success:
        case typeUtils(userAction.loginInfo).error:
            return handleAsyncReducer(
                userAction.loginInfo,
                "loginInfo",
                true
            )(state, action);

        case userAction.profile:
        case typeUtils(userAction.profile).success:
        case typeUtils(userAction.profile).error:
            return handleAsyncReducer(
                userAction.profile,
                "profile",
                true
            )(state, action);

        case userAction.latestImage:
        case typeUtils(userAction.latestImage).success:
        case typeUtils(userAction.latestImage).error:
            return handleAsyncReducer(
                userAction.latestImage,
                "latestImage",
                true
            )(state, action);

        case userAction.allImage:
        case typeUtils(userAction.allImage).success:
        case typeUtils(userAction.allImage).error:
            return handleAsyncReducer(
                userAction.allImage,
                "allImage",
                true
            )(state, action);

        case userAction.introduce:
        case typeUtils(userAction.introduce).success:
        case typeUtils(userAction.introduce).error:
            return handleAsyncReducer(
                userAction.introduce,
                "introduce",
                true
            )(state, action);

        case userAction.coverImage:
        case typeUtils(userAction.coverImage).success:
        case typeUtils(userAction.coverImage).error:
            return handleAsyncReducer(
                userAction.coverImage,
                "coverImage",
                true
            )(state, action);

        case userAction.profileImage:
        case typeUtils(userAction.profileImage).success:
        case typeUtils(userAction.profileImage).error:
            return handleAsyncReducer(
                userAction.profileImage,
                "profileImage",
                true
            )(state, action);

        default:
            return state;
    }
};

export default reducer;
