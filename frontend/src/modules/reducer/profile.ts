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
} from "../action/profile";

import { reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    profile: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case PROFILE || INTRODUCE || PROFILEIMAGE || COVERIMAGE:
            return {
                ...state,
                profile: reducerUtils.loading(state.profile.data),
            };
        case PROFILE_SUCCESS:
            return {
                ...state,
                profile: reducerUtils.success(data),
            };
        case PROFILE_ERROR ||
            INTRODUCE_ERROR ||
            PROFILEIMAGE_ERROR ||
            COVERIMAGE_ERROR:
            return {
                ...state,
                profile: reducerUtils.error(data),
            };
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
