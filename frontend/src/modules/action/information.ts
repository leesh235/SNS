import {
    Job,
    School,
    University,
    DeleteInfo,
} from "../../types/lib/information";

export const informationAction = {
    getInfo: "information/GET_INFO",
    addJob: "information/ADD_JOB",
    addSchool: "information/ADD_SCHOOL",
    addUniversity: "information/ADD_UNIVERSITY",
    removeJob: "information/REMOVE_JOB",
    removeSchool: "information/REMOVE_SCHOOL",
    removeUniversity: "information/REMOVE_UNIVERSITY",
};

export const informationActionCreator = {
    getInfo: () => {
        return {
            type: informationAction.getInfo,
        };
    },
    addJob: (data: Job) => {
        return {
            type: informationAction.addJob,
            data,
        };
    },
    addSchool: (data: School) => {
        return {
            type: informationAction.addSchool,
            data,
        };
    },
    addUniversity: (data: University) => {
        return {
            type: informationAction.addUniversity,
            data,
        };
    },
    removeJob: (data: DeleteInfo) => {
        return {
            type: informationAction.removeJob,
            data,
        };
    },
    removeSchool: (data: DeleteInfo) => {
        return {
            type: informationAction.removeSchool,
            data,
        };
    },
    removeUniversity: (data: DeleteInfo) => {
        return {
            type: informationAction.removeUniversity,
            data,
        };
    },
};
