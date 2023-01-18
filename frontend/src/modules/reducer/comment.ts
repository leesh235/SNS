import { commentAction } from "../action/comment";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

interface Props {
    [key: string]: {
        loading: boolean;
        data: any;
        error: any;
    };
}

const initialState: Props = {
    commentList: reducerUtils.initial(null),
    write: reducerUtils.initial(null),
    modify: reducerUtils.initial(null),
    delete: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data, meta } = action;
    switch (type) {
        case commentAction.list:
        case typeUtils(commentAction.list).success:
        case typeUtils(commentAction.list).error:
            return handleAsyncReducer(
                commentAction.list,
                `${meta}`,
                true
            )(state, action);
        case commentAction.write:
        case typeUtils(commentAction.write).success:
        case typeUtils(commentAction.write).error:
            return handleAsyncReducer(
                commentAction.write,
                "write",
                true
            )(state, action);
        case commentAction.modify:
        case typeUtils(commentAction.modify).success:
        case typeUtils(commentAction.modify).error:
            return handleAsyncReducer(
                commentAction.modify,
                "modify",
                true
            )(state, action);
        case commentAction.delete:
        case typeUtils(commentAction.delete).error:
            return handleAsyncReducer(
                commentAction.delete,
                "delete",
                true
            )(state, action);
        case typeUtils(commentAction.delete).success:
            const newState = state[meta];
            delete newState.data[data.id];
            console.log(newState);
            return {
                ...state,
                [meta]: {
                    ...newState,
                },
            };
        default:
            return state;
    }
};

export default reducer;
