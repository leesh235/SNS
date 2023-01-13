import { backend } from "./axios";
import { api } from "../utils/routes";
import { Job, School, University, DeleteInfo } from "../types/lib/information";

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
    addJob,
    removeJob,
    addSchool,
    removeSchool,
    addUniversity,
    removeUniversity,
};
