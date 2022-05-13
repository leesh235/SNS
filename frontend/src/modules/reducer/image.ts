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
        case LATESTIMAGE_SUCCESS:
        case LATESTIMAGE_ERROR:
            return handleAsyncReducer(
                LATESTIMAGE,
                "latestImage",
                true
            )(state, action);
        case ALLIMAGE:
        case ALLIMAGE_SUCCESS:
        case ALLIMAGE_ERROR:
            return handleAsyncReducer(
                ALLIMAGE,
                "allImages",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
