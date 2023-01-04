import { backend } from "./axios";
import { api } from "../utils/routes";

export const searchAllFunc = async (formData: any) => {
    return await backend.get(api.search.all, { params: formData });
};

export const searchPostFunc = async (formData: any) => {
    return await backend.get(api.search.post, { params: formData });
};

export const searchPeopleFunc = async (formData: any) => {
    return await backend.get(api.search.people, { params: formData });
};
