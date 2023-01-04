import { backend } from "./axios";
import { api } from "../utils/routes";

export const getAbility = async () => {
    return await backend.get(api.userDetail.get_ability);
};

export const getInfo = async () => {
    return await backend.get(api.userDetail.get_info);
};

export const setAbility = async (formData: any) => {
    return await backend.post(api.userDetail.set_ability, { ...formData });
};

export const setUniversity = async (formData: any) => {
    return await backend.post(api.userDetail.set_university, {
        ...formData,
    });
};

export const setSchool = async (formData: any) => {
    return await backend.post(api.userDetail.set_school, { ...formData });
};

export const setNumber = async (formData: any) => {
    return await backend.post(api.userDetail.set_number, { ...formData });
};

export const setAddress = async (formData: any) => {
    return await backend.post(api.userDetail.set_address, { ...formData });
};

export const deleteAbility = async (formData: any) => {
    return await backend.post(api.userDetail.delete_ability, {
        ...formData,
    });
};

export const deleteUniversity = async (formData: any) => {
    return await backend.post(api.userDetail.delete_university, {
        ...formData,
    });
};

export const deleteSchool = async (formData: any) => {
    return await backend.post(api.userDetail.delete_school, {
        ...formData,
    });
};
