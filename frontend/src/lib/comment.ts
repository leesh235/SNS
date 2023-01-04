import { backend } from "./axios";
import { api } from "../utils/routes";

const list = async (formData: any) => {
    return await backend.get(api.comment.get, { params: formData });
};

const write = async (formData: any) => {
    return await backend.post(api.comment.write, { ...formData });
};

const modify = async (formData: any) => {
    return await backend.put(api.comment.modify, { ...formData });
};

const remove = async (formData: any) => {
    return await backend.post(api.comment.delete, { ...formData });
};

export default {
    list,
    write,
    modify,
    remove,
};
