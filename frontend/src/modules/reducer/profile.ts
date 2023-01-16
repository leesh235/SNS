import { profileAction } from "../action/profile";
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
        case profileAction.loginInfo:
        case typeUtils(profileAction.loginInfo).success:
        case typeUtils(profileAction.loginInfo).error:
            return handleAsyncReducer(
                profileAction.loginInfo,
                "loginInfo",
                true
            )(state, action);

        case profileAction.profile:
        case typeUtils(profileAction.profile).success:
        case typeUtils(profileAction.profile).error:
            return handleAsyncReducer(
                profileAction.profile,
                "profile",
                true
            )(state, action);

        case profileAction.latestImage:
        case typeUtils(profileAction.latestImage).success:
        case typeUtils(profileAction.latestImage).error:
            return handleAsyncReducer(
                profileAction.latestImage,
                "latestImage",
                true
            )(state, action);

        case profileAction.allImage:
        case typeUtils(profileAction.allImage).success:
        case typeUtils(profileAction.allImage).error:
            return handleAsyncReducer(
                profileAction.allImage,
                "allImage",
                true
            )(state, action);

        case profileAction.introduce:
        case typeUtils(profileAction.introduce).success:
        case typeUtils(profileAction.introduce).error:
            return handleAsyncReducer(
                profileAction.introduce,
                "introduce",
                true
            )(state, action);

        case profileAction.coverImage:
        case typeUtils(profileAction.coverImage).success:
        case typeUtils(profileAction.coverImage).error:
            return handleAsyncReducer(
                profileAction.coverImage,
                "coverImage",
                true
            )(state, action);

        case profileAction.profileImage:
        case typeUtils(profileAction.profileImage).success:
        case typeUtils(profileAction.profileImage).error:
            return handleAsyncReducer(
                profileAction.profileImage,
                "profileImage",
                true
            )(state, action);

        default:
            return state;
    }
};

export default reducer;