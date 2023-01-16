import { Introduce, UserImage, Take } from "../../types/lib/profile";

export const profileAction = {
    profile: "user/PROFILE",
    loginInfo: "user/LOGININFO",
    introduce: "user/INTRODUCE",
    profileImage: "user/PROFILEIMAGE",
    coverImage: "user/COVERIMAGE",
    latestImage: "user/LATEST_IMAGE",
    allImage: "user/ALL_IMAGE",
};

export const profileActionCreator = {
    profile: () => {
        return {
            type: profileAction.profile,
        };
    },
    logInInfo: () => {
        return {
            type: profileAction.loginInfo,
        };
    },
    modifyIntroduce: (data: Introduce) => {
        return {
            type: profileAction.introduce,
            data,
        };
    },
    getLatestImage: () => {
        return {
            type: profileAction.introduce,
        };
    },
    getAllImage: (data: Take) => {
        return {
            type: profileAction.introduce,
            data,
        };
    },
    modifyProfileimage: (data: UserImage) => {
        return {
            type: profileAction.profileImage,
            data,
        };
    },
    modifyCoverimage: (data: UserImage) => {
        return {
            type: profileAction.coverImage,
            data,
        };
    },
};
