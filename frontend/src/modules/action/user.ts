import { Introduce } from "../../types/user";

export const userAction = {
    profile: "user/PROFILE",
    loginInfo: "user/LOGININFO",
    introduce: "user/INTRODUCE",
    profileImage: "user/PROFILEIMAGE",
    coverImage: "user/COVERIMAGE",
};

export const userActionCreator = {
    profile: (data: any) => {
        return {
            type: userAction.profile,
            data,
        };
    },
    logInInfo: () => {
        return {
            type: userAction.loginInfo,
        };
    },
    introduce: (data: Introduce) => {
        return {
            type: userAction.introduce,
            data,
        };
    },
    profileImage: (data: any) => {
        return {
            type: userAction.profileImage,
            data,
        };
    },
    coverImage: (data: any) => {
        return {
            type: userAction.coverImage,
            data,
        };
    },
};
