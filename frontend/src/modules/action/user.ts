import { Introduce, UserImage } from "../../types/user";

export const PROFILE = "user/PROFILE";
export const LOGININFO = "user/LOGININFO";
export const INTRODUCE = "user/INTRODUCE";
export const PROFILEIMAGE = "user/PROFILEIMAGE";
export const COVERIMAGE = "user/COVERIMAGE";

export const setProfile = (data: any) => {
    return {
        type: PROFILE,
        data,
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
