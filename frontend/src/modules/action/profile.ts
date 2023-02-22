import { Introduce, UserImage, Take } from "../../types/lib/profile";

export const profileAction = {
    profile: "user/PROFILE",
    simple: "user/SIMPLE",
    introduce: "user/INTRODUCE",
    profileImage: "user/PROFILEIMAGE",
    coverImage: "user/COVERIMAGE",
    latestImage: "user/LATEST_IMAGE",
    allImage: "user/ALL_IMAGE",
};

export const profileActionCreator = {
    profile: (data: any) => {
        return {
            type: profileAction.profile,
            data,
        };
    },
    simple: () => {
        return {
            type: profileAction.simple,
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
