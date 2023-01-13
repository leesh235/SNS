import { backend } from "./axios";
import { api } from "../utils/routes";
import {
    Login,
    Join,
    FindPassword,
    VerifyCodeNumber,
    ModifyPassword,
} from "../types/lib/auth";

const join = async (data: Join) => {
    return await backend.post(api.auth.join, data);
};

const login = async (data: Login) => {
    return await backend.post(api.auth.login, data);
};

const logout = async () => {
    return await backend.get(api.auth.logout);
};

const refresh = async () => {
    return await backend.get(api.auth.refresh);
};

const find = async (data: FindPassword) => {
    return await backend.post(api.auth.find, data);
};

const verify = async (data: VerifyCodeNumber) => {
    return await backend.post(api.auth.code, data);
};

const modify = async (data: ModifyPassword) => {
    return await backend.post(api.auth.modify, data);
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
