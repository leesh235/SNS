import { backend } from "./axios";
import { api } from "../utils/routes";
import {
    Login,
    Join,
    FindPassword,
    VerifyCodeNumber,
    ModifyPassword,
} from "../types/auth";

const join = async (formData: Join) => {
    return await backend.post(api.auth.join, { ...formData });
};

const login = async (formData: Login) => {
    return await backend.post(api.auth.login, { ...formData });
};

const logout = async () => {
    return await backend.get(api.auth.logout);
};

const refresh = async () => {
    return await backend.get(api.auth.refresh);
};

const find = async (formData: FindPassword) => {
    return await backend.post(api.auth.find, { ...formData });
};

const verify = async (formData: VerifyCodeNumber) => {
    return await backend.post(api.auth.code, { ...formData });
};

const modify = async (formData: ModifyPassword) => {
    return await backend.post(api.auth.modify, { ...formData });
};

export default {
    join,
    login,
    logout,
    refresh,
    find,
    verify,
    modify,
};
