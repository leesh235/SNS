import { PROFILE, PROFILE_SUCCESS, PROFILE_ERROR } from "../action/profile";
import { reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    profile: reducerUtils.initial({}),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case PROFILE:
            return {
                profile: reducerUtils.loading(state.profile),
            };
        case PROFILE_SUCCESS:
            return {
                profile: reducerUtils.success(data),
            };
        case PROFILE_ERROR:
            return {
                ...state,
                profile: reducerUtils.error(data),
            };
        default:
            return state;
    }
};

export default reducer;
