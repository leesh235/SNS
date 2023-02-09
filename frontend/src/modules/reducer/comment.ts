import { commentAction } from "../action/comment";
import {
    addReducer,
    defaultReducer,
    modifyReducer,
    removeReducer,
} from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

interface Props {
    [key: string]: {} | null | "";
}

const initialState: Props = {
    loading: false,
    error: "",
};

const reducer = (state = initialState, action: any) => {
    const { type, data, meta } = action;
    switch (type) {
        case commentAction.list:
        case typeUtils(commentAction.list).success:
        case typeUtils(commentAction.list).error:
            return defaultReducer(
                commentAction.list,
                `${meta.postId}`,
                true
            )(state, action);

        case commentAction.write:
        case typeUtils(commentAction.write).success:
        case typeUtils(commentAction.write).error:
            console.log(action);
            return addReducer(
                commentAction.write,
                `${meta.postId}`,
                true
            )(state, action);

        case commentAction.modify:
        case typeUtils(commentAction.modify).success:
        case typeUtils(commentAction.modify).error:
            return modifyReducer(
                commentAction.modify,
                `${meta.postId}`,
                true
            )(state, action);

        case commentAction.delete:
        case typeUtils(commentAction.delete).success:
        case typeUtils(commentAction.delete).error:
            console.log(action);
            return removeReducer(
                commentAction.delete,
                `${meta.postId}`,
                true
            )(state, action);

        default:
            return state;
    }
};

export default reducer;
