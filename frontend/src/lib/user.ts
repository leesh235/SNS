import { backend } from "./axios";
import { api } from "../utils/routes";
import { Introduce, UserImage } from "../types/user";

export const getLogInInfo = async () => {
    const res = await backend.get(api.user.login_info);
    console.log(res.data);
    return res.data;
};

export const writeIntroduce = async (formData: Introduce) => {
    const res = await backend.post(api.user.introduce, { ...formData });
    return res.data;
};

export const setUserImage = async (formData: any) => {
    const res = await backend.post(api.user.image, formData);
    return res.data;
};

export const getLatestImage = async () => {
    const res = await backend.get(api.user.latest_image);
    return res.data;
};

export const getAllImages = async () => {
    const res = await backend.get(api.user.all_image);
    return res.data;
};

export const getProfile = async () => {
    const res = await backend.get(api.user.profile);
    return res.data;
};
