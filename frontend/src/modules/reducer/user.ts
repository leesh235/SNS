import { userAction } from "../action/user";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    detail: reducerUtils.initial(null),
    info: reducerUtils.initial(null),
    images: reducerUtils.initial(null),
    posts: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type } = action;
    switch (type) {
        case userAction.detail:
        case typeUtils(userAction.detail).success:
        case typeUtils(userAction.detail).error:
            return handleAsyncReducer(
                userAction.detail,
                "detail",
                true
            )(state, action);

        case userAction.info:
        case typeUtils(userAction.info).success:
        case typeUtils(userAction.info).error:
            return handleAsyncReducer(
                userAction.info,
                "info",
                true
            )(state, action);

        case userAction.images:
        case typeUtils(userAction.images).success:
        case typeUtils(userAction.images).error:
            return handleAsyncReducer(
                userAction.images,
                "images",
                true
            )(state, action);

        case userAction.posts:
        case typeUtils(userAction.posts).success:
        case typeUtils(userAction.posts).error:
            return handleAsyncReducer(
                userAction.posts,
                "posts",
                true
            )(state, action);

        default:
            return state;
    }
};

export default reducer;
