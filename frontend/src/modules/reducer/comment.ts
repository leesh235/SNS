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
        case typeUtils(commentAction.write).error:
            return handleAsyncReducer(
                commentAction.write,
                "write",
                true
            )(state, action);
        case typeUtils(commentAction.write).success:
            const newData = {
                ...state[meta],
                data: {
                    ...state[meta].data,
                    [action.data.id]: action.data,
                },
            };
            return {
                ...state,
                [meta]: newData,
            };
        case commentAction.modify:
        case typeUtils(commentAction.modify).error:
            return handleAsyncReducer(
                commentAction.modify,
                "modify",
                true
            )(state, action);
        case typeUtils(commentAction.modify).success:
            return {
                ...state,
                [meta]: {
                    ...state[meta],
                    data: {
                        ...state[meta].data,
                        [data.id]: {
                            ...state[meta].data[data.id],
                            contents: action.data.contents,
                        },
                    },
                },
            };
        case commentAction.delete:
        case typeUtils(commentAction.delete).error:
            return handleAsyncReducer(
                commentAction.delete,
                "delete",
                true
            )(state, action);
        case typeUtils(commentAction.delete).success:
            const newState = state[meta].data;
            delete newState[data.id];
            return {
                ...state,
                [meta]: {
                    ...state[meta],
                    data: {
                        ...newState,
                    },
                },
            };
        default:
            return state;
    }
};

export default reducer;
