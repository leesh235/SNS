import {
    PROFILE,
    PROFILE_SUCCESS,
    PROFILE_ERROR,
    INTRODUCE,
    INTRODUCE_SUCCESS,
    INTRODUCE_ERROR,
} from "../action/profile";

import { reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    profile: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case PROFILE:
            return {
                ...state,
                profile: reducerUtils.loading(state.profile.data),
            };
        case PROFILE_SUCCESS:
            return {
                ...state,
                profile: reducerUtils.success(data),
            };
        case PROFILE_ERROR:
            return {
                ...state,
                profile: reducerUtils.error(data),
            };
        case INTRODUCE:
            return {
                ...state,
                profile: reducerUtils.loading(state.profile.data),
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
        case INTRODUCE_ERROR:
            return {
                ...state,
                profile: reducerUtils.error(data),
            };
        default:
            return state;
    }
};

export default reducer;
