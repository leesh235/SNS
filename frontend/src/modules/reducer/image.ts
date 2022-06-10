import { LATESTIMAGE, ALLIMAGE } from "../action/image";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    latestImage: reducerUtils.initial([]),
    allImages: reducerUtils.initial([]),
};

const reducer = (state = initialState, action: any) => {
    const { type } = action;
    switch (type) {
        case LATESTIMAGE:
        case typeUtils(LATESTIMAGE).success:
        case typeUtils(LATESTIMAGE).error:
            return handleAsyncReducer(
                LATESTIMAGE,
                "latestImage",
                true
            )(state, action);
        case ALLIMAGE:
        case typeUtils(ALLIMAGE).success:
        case typeUtils(ALLIMAGE).error:
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
