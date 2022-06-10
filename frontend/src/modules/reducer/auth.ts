import { JOIN, LOGIN } from "../action/auth";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    user: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type } = action;
    switch (type) {
        case JOIN:
        case typeUtils(JOIN).success:
        case typeUtils(JOIN).error:
            return handleAsyncReducer(JOIN, "user", true)(state, action);
        case LOGIN:
        case typeUtils(LOGIN).success:
        case typeUtils(LOGIN).error:
            return handleAsyncReducer(LOGIN, "user", true)(state, action);
        default:
            return state;
    }
};

export default reducer;
