import { postAction } from "../action/post";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    postDetails: reducerUtils.initial(null),
    postDetail: reducerUtils.initial(null),
    deletePost: reducerUtils.initial(null),
    modifyPost: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case postAction.detail:
        case typeUtils(postAction.detail).success:
        case typeUtils(postAction.detail).error:
            return handleAsyncReducer(
                postAction.detail,
                "postDetail",
                true
            )(state, action);
        case postAction.write:
        case typeUtils(postAction.write).error:
            return handleAsyncReducer(
                postAction.write,
                "postDetails",
                true
            )(state, action);
        case typeUtils(postAction.write).success:
            return {
                ...state,
                postDetails: {
                    ...state.postDetails,
                    data: {
                        ...state.postDetails.data,
                        ...data,
                    },
                },
            };
        case postAction.modify:
        case typeUtils(postAction.modify).error:
            return handleAsyncReducer(
                postAction.modify,
                "modifyPost",
                true
            )(state, action);
        case typeUtils(postAction.modify).success:
            return {
                ...state,
                postDetails: {
                    ...state.postDetails,
                    data: {
                        ...state.postDetails.data,
                        [data?.id]: data.data,
                    },
                },
            };
        case postAction.delete:
        case typeUtils(postAction.delete).error:
            return handleAsyncReducer(
                postAction.delete,
                "postDetails",
                true
            )(state, action);
        case typeUtils(postAction.delete).success:
            let newData: any = state.postDetails.data;
            delete newData?.[data.id];
            return {
                ...state,
                postDetails: {
                    ...state.postDetails,
                    data: newData,
                },
            };
        case postAction.like:
        case typeUtils(postAction.like).error:
            return handleAsyncReducer(
                postAction.like,
                "postDetails",
                true
            )(state, action);
        case typeUtils(postAction.like).success:
            return {
                ...state,
                postDetails: {
                    ...state.postDetails,
                    data: {
                        ...state.postDetails.data,
                        [data.postId]: {
                            ...state.postDetails.data[data.postId],
                            likeStatus: data.status,
                            likequantity: data.quantity,
                        },
                    },
                },
            };
        default:
            return state;
    }
};

export default reducer;
