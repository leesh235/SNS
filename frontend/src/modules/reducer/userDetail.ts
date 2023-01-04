import { userDetailAction } from "../action/userDetail";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    ability: reducerUtils.initial(null),
    info: reducerUtils.initial(null),
    setAbility: reducerUtils.initial(null),
    setUniversity: reducerUtils.initial(null),
    setSchool: reducerUtils.initial(null),
    setNumber: reducerUtils.initial(null),
    setAddress: reducerUtils.initial(null),
    deleteAbility: reducerUtils.initial(null),
    deleteUniversity: reducerUtils.initial(null),
    deleteSchool: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type } = action;
    switch (type) {
        case userDetailAction.getAbility:
        case typeUtils(userDetailAction.getAbility).success:
        case typeUtils(userDetailAction.getAbility).error:
            return handleAsyncReducer(
                userDetailAction.getAbility,
                "ability",
                true
            )(state, action);
        case userDetailAction.getInfo:
        case typeUtils(userDetailAction.getInfo).success:
        case typeUtils(userDetailAction.getInfo).error:
            return handleAsyncReducer(
                userDetailAction.getInfo,
                "info",
                true
            )(state, action);
        case userDetailAction.setAbility:
        case typeUtils(userDetailAction.setAbility).success:
        case typeUtils(userDetailAction.setAbility).error:
            return handleAsyncReducer(
                userDetailAction.setAbility,
                "setAbility",
                true
            )(state, action);
        case userDetailAction.setUuniversity:
        case typeUtils(userDetailAction.setUuniversity).success:
        case typeUtils(userDetailAction.setUuniversity).error:
            return handleAsyncReducer(
                userDetailAction.setUuniversity,
                "setUniversity",
                true
            )(state, action);
        case userDetailAction.setSchool:
        case typeUtils(userDetailAction.setSchool).success:
        case typeUtils(userDetailAction.setSchool).error:
            return handleAsyncReducer(
                userDetailAction.setSchool,
                "setSchool",
                true
            )(state, action);
        case userDetailAction.setNumber:
        case typeUtils(userDetailAction.setNumber).success:
        case typeUtils(userDetailAction.setNumber).error:
            return handleAsyncReducer(
                userDetailAction.setNumber,
                "setNumber",
                true
            )(state, action);
        case userDetailAction.setAddress:
        case typeUtils(userDetailAction.setAddress).success:
        case typeUtils(userDetailAction.setAddress).error:
            return handleAsyncReducer(
                userDetailAction.setAddress,
                "setAddress",
                true
            )(state, action);
        case userDetailAction.deleteAbility:
        case typeUtils(userDetailAction.deleteAbility).success:
        case typeUtils(userDetailAction.deleteAbility).error:
            return handleAsyncReducer(
                userDetailAction.deleteAbility,
                "deleteAbility",
                true
            )(state, action);
        case userDetailAction.deleteUniversity:
        case typeUtils(userDetailAction.deleteUniversity).success:
        case typeUtils(userDetailAction.deleteUniversity).error:
            return handleAsyncReducer(
                userDetailAction.deleteUniversity,
                "deleteUniversity",
                true
            )(state, action);
        case userDetailAction.deleteSchool:
        case typeUtils(userDetailAction.deleteSchool).success:
        case typeUtils(userDetailAction.deleteSchool).error:
            return handleAsyncReducer(
                userDetailAction.deleteSchool,
                "deleteSchool",
                true
            )(state, action);
        default:
            return state;
    }
};

export default reducer;
