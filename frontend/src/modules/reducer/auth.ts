import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../action/auth";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    user: reducerUtils.initial({ token: undefined }),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case LOGIN:
            console.log("LOGIN");
            return {
                ...state,
                user: reducerUtils.loading(state.user),
            };
        case LOGIN_SUCCESS:
            console.log("LOGIN_SUCCESS");
            setTimeout(() => {
                localStorage.setItem("token", data.accessToken);
            }, 500);
            return {
                ...state,
                user: reducerUtils.success(data),
            };
        case LOGIN_ERROR:
            console.log("LOGIN_ERROR");
            return {
                ...state,
                user: reducerUtils.error(data),
            };
        default:
            return state;
    }
};

export default reducer;
