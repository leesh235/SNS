import { userAction } from "../action/user";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    profile: reducerUtils.initial(null),
    loginInfo: reducerUtils.initial(null),
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
        case userAction.introduce:
        case typeUtils(userAction.introduce).error:
            return handleAsyncReducer(
                userAction.profile,
                "profile",
                true
            )(state, action);
        case userAction.profileImage:
        case typeUtils(userAction.profileImage).error:
            return handleAsyncReducer(
                userAction.profile,
                "profile",
                true
            )(state, action);
        case userAction.coverImage:
        case typeUtils(userAction.coverImage).error:
            return handleAsyncReducer(
                userAction.profile,
                "profile",
                true
            )(state, action);
        case typeUtils(userAction.introduce).success:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    data: {
                        ...state.profile.data,
                        introduction:
                            reducerUtils.success(data).data.introduction,
                    },
                },
            };
        case typeUtils(userAction.profileImage).success:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    data: {
                        ...state.profile.data,
                        profileImage:
                            reducerUtils.success(data).data.profileImage,
                    },
                },
            };
        case typeUtils(userAction.coverImage).success:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    data: {
                        ...state.profile.data,
                        coverImage: reducerUtils.success(data).data.coverImage,
                    },
                },
            };
        default:
            return state;
    }
};

export default reducer;
