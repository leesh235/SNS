import { backend } from "./axios";
import { api } from "../utils/routes";
import { Introduce, UserImage, Take } from "../types/lib/profile";

const logInInfo = async () => {
    return await backend.get(api.profile.login_info);
};

const profile = async () => {
    return await backend.get(api.profile.profile);
};

const modifyIntroduce = async (data: Introduce) => {
    return await backend.post(api.profile.introduce, data);
};

const getLatestImage = async () => {
    return await backend.get(api.profile.introduce);
};

const getAllImage = async (data: Take) => {
    return await backend.get(api.profile.introduce, { params: data });
};

const modifyCoverimage = async (data: UserImage) => {
    return await backend.post(api.profile.coverimage, data);
};

const modifyProfileimage = async (data: UserImage) => {
    return await backend.post(api.profile.profileimage, data);
};

export default {
    logInInfo,
    profile,
    modifyIntroduce,
    modifyCoverimage,
    modifyProfileimage,
    getLatestImage,
    getAllImage,
};
