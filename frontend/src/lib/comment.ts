import { backend } from "./axios";
import { api } from "../utils/routes";

export const listFunc = async (formData: any) => {
    const res = await backend.get(api.comment.get, { params: formData });
    return res.data;
};

export const writeFunc = async (formData: any) => {
    const res = await backend.post(api.comment.write, { ...formData });
    return res.data;
};

export const modifyFunc = async (formData: any) => {
    const res = await backend.put(api.comment.modify, { ...formData });
    return res.data;
};

export const deleteFunc = async (formData: any) => {
    const res = await backend.post(api.comment.delete, { ...formData });
    return res.data;
};
