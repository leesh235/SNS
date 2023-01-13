import { backend } from "./axios";
import { api } from "../utils/routes";
import { Search } from "../types/lib/search";

const searchAll = async (data: Search) => {
    return await backend.get(api.search.all, { params: data });
};

const searchPost = async (data: Search) => {
    return await backend.get(api.search.post, { params: data });
};

const searchPeople = async (data: Search) => {
    return await backend.get(api.search.people, { params: data });
};

export default {
    searchAll,
    searchPost,
    searchPeople,
};
