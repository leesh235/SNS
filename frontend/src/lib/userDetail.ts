import { backend } from "./axios";
import { api } from "../utils/routes";

const getAbility = async () => {
    return await backend.get(api.userDetail.get_ability);
};

const getInfo = async () => {
    return await backend.get(api.userDetail.get_info);
};

const setAbility = async (formData: any) => {
    return await backend.post(api.userDetail.set_ability, { ...formData });
};

const setUniversity = async (formData: any) => {
    return await backend.post(api.userDetail.set_university, {
        ...formData,
    });
};

const setSchool = async (formData: any) => {
    return await backend.post(api.userDetail.set_school, { ...formData });
};

const setNumber = async (formData: any) => {
    return await backend.post(api.userDetail.set_number, { ...formData });
};

const setAddress = async (formData: any) => {
    return await backend.post(api.userDetail.set_address, { ...formData });
};

const deleteAbility = async (formData: any) => {
    return await backend.post(api.userDetail.delete_ability, {
        ...formData,
    });
};

const deleteUniversity = async (formData: any) => {
    return await backend.post(api.userDetail.delete_university, {
        ...formData,
    });
};

const deleteSchool = async (formData: any) => {
    return await backend.post(api.userDetail.delete_school, {
        ...formData,
    });
};

export default {
    getAbility,
    getInfo,
    setAbility,
    setUniversity,
    setSchool,
    setNumber,
    setAddress,
    deleteAbility,
    deleteUniversity,
    deleteSchool,
};
