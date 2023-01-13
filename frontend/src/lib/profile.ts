import { backend } from "./axios";
import { api } from "../utils/routes";
import {
    Introduce,
    UserImage,
    Job,
    School,
    University,
    DeleteInfo,
} from "../types/lib/profile";

const logInInfo = async () => {
    return await backend.get(api.profile.login_info);
};

const profile = async () => {
    return await backend.get(api.profile.profile);
};

const modifyIntroduce = async (data: Introduce) => {
    return await backend.post(api.profile.introduce, data);
};

const modifyCoverimage = async (data: UserImage) => {
    return await backend.post(api.profile.coverimage, data);
};

const modifyProfileimage = async (data: UserImage) => {
    return await backend.post(api.profile.profileimage, data);
};

const addJob = async (data: Job) => {
    return await backend.post(api.profile.ability, data);
};

const removeJob = async (data: DeleteInfo) => {
    return await backend.delete(api.profile.ability, { params: data });
};

const addSchool = async (data: School) => {
    return await backend.post(api.profile.school, data);
};

const removeSchool = async (data: DeleteInfo) => {
    return await backend.delete(api.profile.school, { params: data });
};

const addUniversity = async (data: University) => {
    return await backend.post(api.profile.university, data);
};

const removeUniversity = async (data: DeleteInfo) => {
    return await backend.delete(api.profile.university, { params: data });
};

export default {
    logInInfo,
    profile,
    modifyIntroduce,
    modifyCoverimage,
    modifyProfileimage,
    addJob,
    removeJob,
    addSchool,
    removeSchool,
    addUniversity,
    removeUniversity,
};
