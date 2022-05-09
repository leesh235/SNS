import { backend } from "./axios";
import { api } from "../utils/routes";

export const searchAllFunc = async (formData: any) => {
    const res = await backend.get(api.search.all, { params: formData });
    return res.data;
};

export const searchPostFunc = async (formData: any) => {
    const res = await backend.get(api.search.post, { params: formData });
    return res.data;
};

export const searchPeopleFunc = async (formData: any) => {
    const res = await backend.get(api.search.people, { params: formData });
    return res.data;
};
