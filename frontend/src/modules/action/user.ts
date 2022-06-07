import { Introduce, UserImage } from "../../types/user";

export const PROFILE = "user/PROFILE";
export const PROFILE_SUCCESS = "user/PROFILE_SUCCESS";
export const PROFILE_ERROR = "user/PROFILE_ERROR";

export const LOGININFO = "user/LOGININFO";
export const LOGININFO_SUCCESS = "user/LOGININFO_SUCCESS";
export const LOGININFO_ERROR = "user/LOGININFO_ERROR";

export const INTRODUCE = "user/INTRODUCE";
export const INTRODUCE_SUCCESS = "user/INTRODUCE_SUCCESS";
export const INTRODUCE_ERROR = "user/INTRODUCE_ERROR";

export const PROFILEIMAGE = "user/PROFILEIMAGE";
export const PROFILEIMAGE_SUCCESS = "user/PROFILEIMAGE_SUCCESS";
export const PROFILEIMAGE_ERROR = "user/PROFILEIMAGE_ERROR";

export const COVERIMAGE = "user/COVERIMAGE";
export const COVERIMAGE_SUCCESS = "user/COVERIMAGE_SUCCESS";
export const COVERIMAGE_ERROR = "user/COVERIMAGE_ERROR";

export const setProfile = () => {
    return {
        type: PROFILE,
    };
};

export const setLogInInfo = () => {
    return {
        type: LOGININFO,
    };
};

export const setIntroduce = (data: Introduce) => {
    return {
        type: INTRODUCE,
        data,
    };
};

export const setProfileImage = (data: any) => {
    return {
        type: PROFILEIMAGE,
        data,
    };
};

export const setCoverImage = (data: any) => {
    return {
        type: COVERIMAGE,
        data,
    };
};
