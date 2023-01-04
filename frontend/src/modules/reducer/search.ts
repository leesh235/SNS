import { searchAction } from "../action/search";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    all: reducerUtils.initial(null),
    post: reducerUtils.initial(null),
    people: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case searchAction.all:
        case typeUtils(searchAction.all).success:
        case typeUtils(searchAction.all).error:
            return handleAsyncReducer(
                searchAction.all,
                "all",
                true
            )(state, action);
        case searchAction.post:
        case typeUtils(searchAction.post).success:
        case typeUtils(searchAction.post).error:
            return handleAsyncReducer(
                searchAction.post,
                "post",
                true
            )(state, action);
        case searchAction.people:
        case typeUtils(searchAction.people).success:
        case typeUtils(searchAction.people).error:
            return handleAsyncReducer(
                searchAction.people,
                "people",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
