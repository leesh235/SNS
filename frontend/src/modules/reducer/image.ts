import {
    LATESTIMAGE,
    LATESTIMAGE_SUCCESS,
    LATESTIMAGE_ERROR,
    ALLIMAGE,
    ALLIMAGE_SUCCESS,
    ALLIMAGE_ERROR,
} from "../action/image";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    latestImage: reducerUtils.initial([]),
    allImages: reducerUtils.initial([]),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case LATESTIMAGE:
            return {
                ...state,
                latestImage: reducerUtils.loading(state.latestImage.data),
            };
        case ALLIMAGE:
            return {
                ...state,
                allImages: reducerUtils.loading(state.allImages.data),
            };
        case LATESTIMAGE_SUCCESS:
            return {
                ...state,
                latestImage: reducerUtils.success(data),
            };
        case ALLIMAGE_SUCCESS:
            return {
                ...state,
                allImages: reducerUtils.success(data),
            };
        case LATESTIMAGE_ERROR:
            return {
                ...state,
                latestImage: reducerUtils.error(data),
            };
        case ALLIMAGE_ERROR:
            return {
                ...state,
                allImages: reducerUtils.error(data),
            };
        default:
            return state;
    }
};

export default reducer;
