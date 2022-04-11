import { backend } from "./axios";
import { api } from "../utils/routes";

export const getProfile = async () => {
    const res = await backend.get(api.user.profile);
    console.log(res.data);
    return res.data;
};
