import { backend } from "./axios";
import { api } from "../utils/routes";

export const getAbility = async () => {
    const res = await backend.get(api.userDetail.get_ability);
    return res.data;
};

export const getInfo = async () => {
    const res = await backend.get(api.userDetail.get_info);
    return res.data;
};

export const setAbility = async (formData: any) => {
    const res = await backend.post(api.userDetail.set_ability, { ...formData });
    return res.data;
};

export const setUniversity = async (formData: any) => {
    const res = await backend.post(api.userDetail.set_university, {
        ...formData,
    });
    return res.data;
};

export const setSchool = async (formData: any) => {
    const res = await backend.post(api.userDetail.set_school, { ...formData });
    return res.data;
};

export const setNumber = async (formData: any) => {
    const res = await backend.post(api.userDetail.set_number, { ...formData });
    return res.data;
};

export const setAddress = async (formData: any) => {
    const res = await backend.post(api.userDetail.set_address, { ...formData });
    return res.data;
};
