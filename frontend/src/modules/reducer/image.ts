import { imageAction } from "../action/image";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    latestImage: reducerUtils.initial([]),
    allImages: reducerUtils.initial([]),
};

const reducer = (state = initialState, action: any) => {
    const { type } = action;
    switch (type) {
        case imageAction.latestImage:
        case typeUtils(imageAction.latestImage).success:
        case typeUtils(imageAction.latestImage).error:
            return handleAsyncReducer(
                imageAction.latestImage,
                "latestImage",
                true
            )(state, action);
        case imageAction.allImage:
        case typeUtils(imageAction.allImage).success:
        case typeUtils(imageAction.allImage).error:
            return handleAsyncReducer(
                imageAction.allImage,
                "allImages",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
