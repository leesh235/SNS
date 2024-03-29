import { imageAction } from "../action/image";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    single: reducerUtils.initial(null),
    array: reducerUtils.initial(null),
    remove: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type } = action;
    switch (type) {
        case imageAction.single:
        case typeUtils(imageAction.single).success:
        case typeUtils(imageAction.single).error:
            return handleAsyncReducer(
                imageAction.single,
                "single",
                true
            )(state, action);
        case imageAction.array:
        case typeUtils(imageAction.array).success:
        case typeUtils(imageAction.array).error:
            return handleAsyncReducer(
                imageAction.array,
                "array",
                true
            )(state, action);
        case imageAction.remove:
        case typeUtils(imageAction.remove).success:
        case typeUtils(imageAction.remove).error:
            return handleAsyncReducer(
                imageAction.remove,
                "remove",
                true
            )(state, action);

        case imageAction.init:
            return {
                single: reducerUtils.initial(null),
                array: reducerUtils.initial(null),
                remove: reducerUtils.initial(null),
            };

        case imageAction.modify:
            const newState = state.array.data;
            const resultState = newState.filter(
                (val: any) => val.id !== action.id
            );
            return {
                ...state,
                array: {
                    ...state.array,
                    data: resultState,
                },
            };

        default:
            return state;
    }
};

export default reducer;
