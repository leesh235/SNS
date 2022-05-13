import {
    JOIN,
    JOIN_ERROR,
    JOIN_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from "../action/auth";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    user: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case JOIN:
        case JOIN_SUCCESS:
        case JOIN_ERROR:
            return handleAsyncReducer(JOIN, "user", true)(state, action);
        case LOGIN:
        case LOGIN_SUCCESS:
        case LOGIN_ERROR:
            return handleAsyncReducer(LOGIN, "user", true)(state, action);
        default:
            return state;
    }
};

export default reducer;
