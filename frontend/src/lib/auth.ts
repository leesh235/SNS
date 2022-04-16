import { backend } from "./axios";
import { api } from "../utils/routes";
import { Login, Join } from "../types/auth";

export const loginFunc = async (formData: Login) => {
  const res = await backend.post(api.auth.login, { ...formData });
  return res.data;
};

export const joinFunc = async (formData: Join) => {
  const res = await backend.post(api.auth.join, { ...formData });
  return res.data;
};
