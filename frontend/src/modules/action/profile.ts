import { Introduce, UserImage, Take } from "../../types/lib/profile";

export const userAction = {
    profile: "user/PROFILE",
    loginInfo: "user/LOGININFO",
    introduce: "user/INTRODUCE",
    profileImage: "user/PROFILEIMAGE",
    coverImage: "user/COVERIMAGE",
    latestImage: "user/LATEST_IMAGE",
    allImage: "user/ALL_IMAGE",
};

export const userActionCreator = {
    profile: () => {
        return {
            type: userAction.profile,
        };
    },
    logInInfo: () => {
        return {
            type: userAction.loginInfo,
        };
    },
    modifyIntroduce: (data: Introduce) => {
        return {
            type: userAction.introduce,
            data,
        };
    },
    getLatestImage: () => {
        return {
            type: userAction.introduce,
        };
    },
    getAllImage: (data: Take) => {
        return {
            type: userAction.introduce,
            data,
        };
    },
    modifyProfileimage: (data: UserImage) => {
        return {
            type: userAction.profileImage,
            data,
        };
    },
    modifyCoverimage: (data: UserImage) => {
        return {
            type: userAction.coverImage,
            data,
        };
    },
};
