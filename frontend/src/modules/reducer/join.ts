import { JOIN, JOIN_ERROR, JOIN_SUCCESS } from "../action/join";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";

const initialState = {
    user: reducerUtils.initial({ token: undefined }),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case JOIN:
            return {
                ...state,
                user: reducerUtils.loading(state.user),
            };
        case JOIN_SUCCESS:
            localStorage.setItem("token", data.accessToken);
            window.location.reload();
            return {
                ...state,
                user: reducerUtils.success(data),
            };
        case JOIN_ERROR:
            return {
                ...state,
                user: reducerUtils.error(data),
            };
        default:
            return state;
    }
};

export default reducer;
