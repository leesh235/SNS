import { backend } from "./axios";
import { api } from "../utils/routes";
import { Login } from "../types/auth";

export const loginFunc = async (formData: Login) => {
    const res = await backend.post(api.auth.login, { ...formData });
    return res.data;
};
