import { userAction } from "../action/profile";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    loginInfo: reducerUtils.initial(null),
    profile: reducerUtils.initial(null),
    introduce: reducerUtils.initial(null),
    profileImage: reducerUtils.initial(null),
    coverImage: reducerUtils.initial(null),
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
        case userAction.loginInfo:
        case typeUtils(userAction.loginInfo).success:
        case typeUtils(userAction.loginInfo).error:
            return handleAsyncReducer(
                userAction.loginInfo,
                "loginInfo",
                true
            )(state, action);

        case userAction.profile:
        case typeUtils(userAction.profile).success:
        case typeUtils(userAction.profile).error:
            return handleAsyncReducer(
                userAction.profile,
                "profile",
                true
            )(state, action);

        case userAction.introduce:
        case typeUtils(userAction.introduce).success:
        case typeUtils(userAction.introduce).error:

        case userAction.coverImage:
        case typeUtils(userAction.coverImage).success:
        case typeUtils(userAction.coverImage).error:

        case userAction.profileImage:
        case typeUtils(userAction.profileImage).success:
        case typeUtils(userAction.profileImage).error:

        case userAction.addJob:
        case typeUtils(userAction.addJob).success:
        case typeUtils(userAction.addJob).error:

        case userAction.addSchool:
        case typeUtils(userAction.addSchool).success:
        case typeUtils(userAction.addSchool).error:

        case userAction.addUniversity:
        case typeUtils(userAction.addUniversity).success:
        case typeUtils(userAction.addUniversity).error:

        case userAction.removeJob:
        case typeUtils(userAction.removeJob).success:
        case typeUtils(userAction.removeJob).error:

        case userAction.removeSchool:
        case typeUtils(userAction.removeSchool).success:
        case typeUtils(userAction.removeSchool).error:

        case userAction.removeUniversity:
        case typeUtils(userAction.removeUniversity).success:
        case typeUtils(userAction.removeUniversity).error:

        default:
            return state;
    }
};

export default reducer;
