import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../action/login";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    user: reducerUtils.initial({ token: undefined }),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case LOGIN:
            return {
                ...state,
                user: reducerUtils.loading(state.user),
            };
        case LOGIN_SUCCESS:
            localStorage.setItem("token", data.accessToken);
            window.location.reload();
            return {
                ...state,
                user: reducerUtils.success(data),
            };
        case LOGIN_ERROR:
            return {
                ...state,
                user: reducerUtils.error(data),
            };
        default:
            return state;
    }
};

export default reducer;
