import { informationAction } from "../action/information";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    getInfo: reducerUtils.initial(null),
    addJob: reducerUtils.initial(null),
    addSchool: reducerUtils.initial(null),
    addUniversity: reducerUtils.initial(null),
    removeJob: reducerUtils.initial(null),
    removeSchool: reducerUtils.initial(null),
    removeUniversity: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case informationAction.getInfo:
        case typeUtils(informationAction.getInfo).success:
        case typeUtils(informationAction.getInfo).error:
            return handleAsyncReducer(
                informationAction.getInfo,
                "getInfo",
                true
            )(state, action);

        case informationAction.addJob:
        case typeUtils(informationAction.addJob).success:
        case typeUtils(informationAction.addJob).error:
            return handleAsyncReducer(
                informationAction.addJob,
                "addJob",
                true
            )(state, action);

        case informationAction.addSchool:
        case typeUtils(informationAction.addSchool).success:
        case typeUtils(informationAction.addSchool).error:
            return handleAsyncReducer(
                informationAction.addSchool,
                "addSchool",
                true
            )(state, action);

        case informationAction.addUniversity:
        case typeUtils(informationAction.addUniversity).success:
        case typeUtils(informationAction.addUniversity).error:
            return handleAsyncReducer(
                informationAction.addUniversity,
                "addUniversity",
                true
            )(state, action);

        case informationAction.removeJob:
        case typeUtils(informationAction.removeJob).success:
        case typeUtils(informationAction.removeJob).error:
            return handleAsyncReducer(
                informationAction.removeJob,
                "removeJob",
                true
            )(state, action);

        case informationAction.removeSchool:
        case typeUtils(informationAction.removeSchool).success:
        case typeUtils(informationAction.removeSchool).error:
            return handleAsyncReducer(
                informationAction.removeSchool,
                "removeSchool",
                true
            )(state, action);

        case informationAction.removeUniversity:
        case typeUtils(informationAction.removeUniversity).success:
        case typeUtils(informationAction.removeUniversity).error:
            return handleAsyncReducer(
                informationAction.removeUniversity,
                "removeUniversity",
                true
            )(state, action);

        default:
            return state;
    }
};

export default reducer;
