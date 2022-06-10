import {
    PROFILE,
    INTRODUCE,
    PROFILEIMAGE,
    COVERIMAGE,
    LOGININFO,
} from "../action/user";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    profile: reducerUtils.initial(null),
    loginInfo: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case LOGININFO:
        case typeUtils(LOGININFO).success:
        case typeUtils(LOGININFO).error:
            return handleAsyncReducer(
                LOGININFO,
                "loginInfo",
                true
            )(state, action);
        case PROFILE:
        case typeUtils(PROFILE).success:
        case typeUtils(PROFILE).error:
            return handleAsyncReducer(PROFILE, "profile", true)(state, action);
        case INTRODUCE:
        case typeUtils(INTRODUCE).error:
            return handleAsyncReducer(PROFILE, "profile", true)(state, action);
        case PROFILEIMAGE:
        case typeUtils(PROFILEIMAGE).error:
            return handleAsyncReducer(PROFILE, "profile", true)(state, action);
        case COVERIMAGE:
        case typeUtils(COVERIMAGE).error:
            return handleAsyncReducer(PROFILE, "profile", true)(state, action);
        case typeUtils(INTRODUCE).success:
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
        case typeUtils(PROFILEIMAGE).success:
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
        case typeUtils(COVERIMAGE).success:
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
