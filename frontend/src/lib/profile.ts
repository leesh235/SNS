import { backend } from "./axios";
import { api } from "../utils/routes";
import { Introduce, UserImage, Take } from "../types/lib/profile";

const logInInfo = async () => {
    return await backend.get(api.profile.simple);
};

const profile = async () => {
    return await backend.get(`${api.profile.profile}`);
};

const userDetail = async (data: any) => {
    return await backend.get(`${api.profile.userDtail}${data.email}`);
};

const modifyIntroduce = async (data: Introduce) => {
    return await backend.patch(api.profile.introduce, data);
};

const getLatestImage = async (data: any) => {
    return await backend.get(`${api.profile.latest}${data.email}`);
};

const getAllImage = async (data: any) => {
    return await backend.get(`${api.profile.all}${data.email}`, {
        params: { take: data.take },
    });
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
    userDetail,
};
