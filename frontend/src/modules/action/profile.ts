import {
    Introduce,
    UserImage,
    Job,
    School,
    University,
    DeleteInfo,
} from "../../types/lib/profile";

export const userAction = {
    profile: "user/PROFILE",
    loginInfo: "user/LOGININFO",
    introduce: "user/INTRODUCE",
    profileImage: "user/PROFILEIMAGE",
    coverImage: "user/COVERIMAGE",
    addJob: "user/ADDJOB",
    addSchool: "user/ADDSCHOOL",
    addUniversity: "user/ADDUNIVERSITY",
    removeJob: "user/REMOVEJOB",
    removeSchool: "user/REMOVESCHOOL",
    removeUniversity: "user/REMOVEUNIVERSITY",
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
    addJob: (data: Job) => {
        return {
            type: userAction.addJob,
            data,
        };
    },
    addSchool: (data: School) => {
        return {
            type: userAction.addSchool,
            data,
        };
    },
    addUniversity: (data: University) => {
        return {
            type: userAction.addUniversity,
            data,
        };
    },
    removeJob: (data: DeleteInfo) => {
        return {
            type: userAction.removeJob,
            data,
        };
    },
    removeSchool: (data: DeleteInfo) => {
        return {
            type: userAction.removeSchool,
            data,
        };
    },
    removeUniversity: (data: DeleteInfo) => {
        return {
            type: userAction.removeUniversity,
            data,
        };
    },
};
