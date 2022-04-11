import { Introduce } from "../../types/user";

export const PROFILE = "user/PROFILE";
export const PROFILE_SUCCESS = "user/PROFILE_SUCCESS";
export const PROFILE_ERROR = "user/PROFILE_ERROR";

export const INTRODUCE = "user/INTRODUCE";
export const INTRODUCE_SUCCESS = "user/INTRODUCE_SUCCESS";
export const INTRODUCE_ERROR = "user/INTRODUCE_ERROR";

export const setProfile = () => {
    return {
        type: PROFILE,
    };
};

export const setIntroduce = (data: Introduce) => {
    return {
        type: INTRODUCE,
        data,
    };
};
