import {
    PROFILE,
    PROFILE_SUCCESS,
    PROFILE_ERROR,
    INTRODUCE,
    INTRODUCE_SUCCESS,
    INTRODUCE_ERROR,
    PROFILEIMAGE,
    PROFILEIMAGE_SUCCESS,
    PROFILEIMAGE_ERROR,
    COVERIMAGE,
    COVERIMAGE_SUCCESS,
    COVERIMAGE_ERROR,
    USERDETAIL,
    USERDETAIL_SUCCESS,
    USERDETAIL_ERROR,
} from "../action/profile";

import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    profile: reducerUtils.initial(null),
    userDetail: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case USERDETAIL:
        case USERDETAIL_SUCCESS:
        case USERDETAIL_ERROR:
            return handleAsyncReducer(
                USERDETAIL,
                "userDetail",
                true
            )(state, action);
        case PROFILE:
        case PROFILE_SUCCESS:
        case PROFILE_ERROR:
            return handleAsyncReducer(PROFILE, "profile", true)(state, action);
        case INTRODUCE:
        case INTRODUCE_ERROR:
            return handleAsyncReducer(PROFILE, "profile", true)(state, action);
        case PROFILEIMAGE:
        case PROFILEIMAGE_ERROR:
            return handleAsyncReducer(PROFILE, "profile", true)(state, action);
        case COVERIMAGE:
        case COVERIMAGE_ERROR:
            return handleAsyncReducer(PROFILE, "profile", true)(state, action);
        case INTRODUCE_SUCCESS:
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
        case PROFILEIMAGE_SUCCESS:
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
        case COVERIMAGE_SUCCESS:
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
