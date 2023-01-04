import { backend } from "./axios";
import { api } from "../utils/routes";
import { Introduce, UserImage } from "../types/user";

export const getLogInInfo = async () => {
    return await backend.get(api.user.login_info);
};

export const getProfile = async (formData: any) => {
    return await backend.get(api.user.profile, { params: formData });
};

export const writeIntroduce = async (formData: Introduce) => {
    return await backend.post(api.user.introduce, { ...formData });
};

export const setUserImage = async (formData: any) => {
    return await backend.post(api.user.image, formData);
};

export const getLatestImage = async (fromData: any) => {
    return await backend.get(api.user.latest_image, { params: fromData });
};

export const getAllImages = async (fromData: any) => {
    return await backend.get(api.user.all_image, { params: fromData });
};
