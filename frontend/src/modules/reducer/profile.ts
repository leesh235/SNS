import { profileAction } from "../action/profile";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    simple: reducerUtils.initial(null),
    profile: reducerUtils.initial(null),
    introduce: reducerUtils.initial(null),
    profileImage: reducerUtils.initial(null),
    coverImage: reducerUtils.initial(null),
    latestImage: reducerUtils.initial([]),
    allImage: reducerUtils.initial([]),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case profileAction.simple:
        case typeUtils(profileAction.simple).success:
        case typeUtils(profileAction.simple).error:
            return handleAsyncReducer(
                profileAction.simple,
                "simple",
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

        case profileAction.userDetail:
        case typeUtils(profileAction.userDetail).success:
        case typeUtils(profileAction.userDetail).error:
            return handleAsyncReducer(
                profileAction.userDetail,
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
        case typeUtils(profileAction.introduce).error:
            return handleAsyncReducer(
                profileAction.introduce,
                "profile",
                true
            )(state, action);
        case typeUtils(profileAction.introduce).success:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    data: {
                        ...state.profile.data,
                        ...action.data,
                    },
                },
            };

        case profileAction.coverImage:
        case typeUtils(profileAction.coverImage).error:
            return handleAsyncReducer(
                profileAction.coverImage,
                "coverImage",
                true
            )(state, action);
        case typeUtils(profileAction.coverImage).success:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    data: {
                        ...state.profile.data,
                        ...action.data,
                    },
                },
            };

        case profileAction.profileImage:
        case typeUtils(profileAction.profileImage).error:
            return handleAsyncReducer(
                profileAction.profileImage,
                "profileImage",
                true
            )(state, action);
        case typeUtils(profileAction.profileImage).success:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    data: {
                        ...state.profile.data,
                        ...action.data,
                    },
                },
            };

        default:
            return state;
    }
};

export default reducer;
