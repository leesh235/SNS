import { backend } from "./axios";
import { api } from "../utils/routes";
import {
    Login,
    Join,
    FindPassword,
    VerifyCodeNumber,
    ModifyPassword,
} from "../types/auth";

export const joinFunc = async (formData: Join) => {
    const res = await backend.post(api.auth.join, { ...formData });
    return res.data;
};

export const loginFunc = async (formData: Login) => {
    const res = await backend.post(api.auth.login, { ...formData });
    return res.data;
};

export const logoutFunc = async () => {
    const res = await backend.get(api.auth.logout);
    return res.data;
};

export const refreshFunc = async () => {
    const res = await backend.get(api.auth.refresh);
    return res.data;
};

export const findPasswordFunc = async (formData: FindPassword) => {
    const res = await backend.post(api.auth.find, { ...formData });
    return res.data;
};

export const verifyCodeNumberFunc = async (formData: VerifyCodeNumber) => {
    const res = await backend.post(api.auth.code, { ...formData });
    return res.data;
};

export const modifyPasswordFunc = async (formData: ModifyPassword) => {
    const res = await backend.post(api.auth.modify, { ...formData });
    return res.data;
};
