import {
    GETABILITY,
    GETINFO,
    SETABILITY,
    SETADDRESS,
    SETNUMBER,
    SETSCHOOL,
    SETUNIVERSITY,
} from "../action/userDetail";
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
};

const reducer = (state = initialState, action: any) => {
    const { type } = action;
    switch (type) {
        case GETABILITY:
        case typeUtils(GETABILITY).success:
        case typeUtils(GETABILITY).error:
            return handleAsyncReducer(
                GETABILITY,
                "ability",
                true
            )(state, action);
        case GETINFO:
        case typeUtils(GETINFO).success:
        case typeUtils(GETINFO).error:
            return handleAsyncReducer(GETINFO, "info", true)(state, action);
        case SETABILITY:
        case typeUtils(SETABILITY).success:
        case typeUtils(SETABILITY).error:
            return handleAsyncReducer(
                SETABILITY,
                "setAbility",
                true
            )(state, action);
        case SETUNIVERSITY:
        case typeUtils(SETUNIVERSITY).success:
        case typeUtils(SETUNIVERSITY).error:
            return handleAsyncReducer(
                SETUNIVERSITY,
                "setUniversity",
                true
            )(state, action);
        case SETSCHOOL:
        case typeUtils(SETSCHOOL).success:
        case typeUtils(SETSCHOOL).error:
            return handleAsyncReducer(
                SETSCHOOL,
                "setSchool",
                true
            )(state, action);
        case SETNUMBER:
        case typeUtils(SETNUMBER).success:
        case typeUtils(SETNUMBER).error:
            return handleAsyncReducer(
                SETNUMBER,
                "setNumber",
                true
            )(state, action);
        case SETADDRESS:
        case typeUtils(SETADDRESS).success:
        case typeUtils(SETADDRESS).error:
            return handleAsyncReducer(
                SETADDRESS,
                "setAddress",
                true
            )(state, action);

        default:
            return state;
    }
};

export default reducer;
