import { backend } from "./axios";
import { api } from "../utils/routes";
import { Job, School, University, DeleteInfo } from "../types/lib/information";

const getInfo = async (data: Job) => {
    return await backend.post(api.info.get, data);
};

const addJob = async (data: Job) => {
    return await backend.post(api.info.ability, data);
};

const removeJob = async (data: DeleteInfo) => {
    return await backend.delete(api.info.ability, { params: data });
};

const addSchool = async (data: School) => {
    return await backend.post(api.info.school, data);
};

const removeSchool = async (data: DeleteInfo) => {
    return await backend.delete(api.info.school, { params: data });
};

const addUniversity = async (data: University) => {
    return await backend.post(api.info.university, data);
};

const removeUniversity = async (data: DeleteInfo) => {
    return await backend.delete(api.info.university, { params: data });
};

export default {
    getInfo,
    addJob,
    removeJob,
    addSchool,
    removeSchool,
    addUniversity,
    removeUniversity,
};
