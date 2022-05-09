import {
    SEARCHALL,
    SEARCHALL_SUCCESS,
    SEARCHALL_ERROR,
    SEARCHPOST,
    SEARCHPOST_SUCCESS,
    SEARCHPOST_ERROR,
    SEARCHPEOPLE,
    SEARCHPEOPLE_SUCCESS,
    SEARCHPEOPLE_ERROR,
} from "../action/search";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    all: reducerUtils.initial(null),
    post: reducerUtils.initial(null),
    people: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case SEARCHALL:
        case SEARCHALL_SUCCESS:
        case SEARCHALL_ERROR:
            return handleAsyncReducer(SEARCHALL, "all", true)(state, action);
        case SEARCHPOST:
        case SEARCHPOST_SUCCESS:
        case SEARCHPOST_ERROR:
            return handleAsyncReducer(SEARCHPOST, "post", true)(state, action);
        case SEARCHPEOPLE:
        case SEARCHPEOPLE_SUCCESS:
        case SEARCHPEOPLE_ERROR:
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
