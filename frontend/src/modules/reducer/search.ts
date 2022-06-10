import { SEARCHALL, SEARCHPOST, SEARCHPEOPLE } from "../action/search";
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
        case SEARCHALL:
        case typeUtils(SEARCHALL).success:
        case typeUtils(SEARCHALL).error:
            return handleAsyncReducer(SEARCHALL, "all", true)(state, action);
        case SEARCHPOST:
        case typeUtils(SEARCHPOST).success:
        case typeUtils(SEARCHPOST).error:
            return handleAsyncReducer(SEARCHPOST, "post", true)(state, action);
        case SEARCHPEOPLE:
        case typeUtils(SEARCHPEOPLE).success:
        case typeUtils(SEARCHPEOPLE).error:
            return handleAsyncReducer(
                SEARCHPEOPLE,
                "people",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
