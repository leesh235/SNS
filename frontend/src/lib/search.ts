import { backend } from "./axios";
import { api } from "../utils/routes";

const searchAll = async (formData: any) => {
    return await backend.get(api.search.all, { params: formData });
};

const searchPost = async (formData: any) => {
    return await backend.get(api.search.post, { params: formData });
};

const searchPeople = async (formData: any) => {
    return await backend.get(api.search.people, { params: formData });
};

export default {
    searchAll,
    searchPost,
    searchPeople,
};
