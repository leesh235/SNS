import { backend } from "./axios";
import { api } from "../utils/routes";

export const listFunc = async (formData: any) => {
    return await backend.get(api.comment.get, { params: formData });
};

export const writeFunc = async (formData: any) => {
    return await backend.post(api.comment.write, { ...formData });
};

export const modifyFunc = async (formData: any) => {
    return await backend.put(api.comment.modify, { ...formData });
};

export const deleteFunc = async (formData: any) => {
    return await backend.post(api.comment.delete, { ...formData });
};
