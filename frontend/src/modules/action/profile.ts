import { Introduce, UserImage, Take } from "../../types/lib/profile";

export const profileAction = {
    profile: "user/PROFILE",
    userDetail: "user/USERDETAIL",
    simple: "user/SIMPLE",
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
    userDetail: (data: any) => {
        return {
            type: profileAction.userDetail,
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
    getLatestImage: (data: any) => {
        return {
            type: profileAction.latestImage,
            data,
        };
    },
    getAllImage: (data: any) => {
        return {
            type: profileAction.allImage,
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
