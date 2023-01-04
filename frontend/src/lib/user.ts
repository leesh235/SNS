import { backend } from "./axios";
import { api } from "../utils/routes";
import { Introduce, UserImage } from "../types/user";

const logInInfo = async () => {
    return await backend.get(api.user.login_info);
};

const profile = async (formData: any) => {
    return await backend.get(api.user.profile, { params: formData });
};

const introduce = async (formData: Introduce) => {
    return await backend.post(api.user.introduce, { ...formData });
};

const userImage = async (formData: any) => {
    return await backend.post(api.user.image, formData);
};

const latestImage = async (fromData: any) => {
    return await backend.get(api.user.latest_image, { params: fromData });
};

const allImages = async (fromData: any) => {
    return await backend.get(api.user.all_image, { params: fromData });
};

export default {
    logInInfo,
    profile,
    introduce,
    userImage,
    latestImage,
    allImages,
};
