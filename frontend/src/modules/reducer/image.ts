import {
    LATESTIMAGE,
    LATESTIMAGE_SUCCESS,
    LATESTIMAGE_ERROR,
} from "../action/image";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    latestImage: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case LATESTIMAGE:
            return {
                ...state,
                latestImage: reducerUtils.loading(state.latestImage.data),
            };
        case LATESTIMAGE_SUCCESS:
            return {
                ...state,
                latestImage: reducerUtils.success(data),
            };
        case LATESTIMAGE_ERROR:
            return {
                ...state,
                latestImage: reducerUtils.error(data),
            };
        default:
            return state;
    }
};

export default reducer;
