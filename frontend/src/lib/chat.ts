import { websocket } from "./axios";
import { api } from "../utils/routes";

export const getRoomList = async () => {
    const { data } = await websocket.get(api.chat.getRoomList);
    return data;
};

export const getMessageList = async (formData: any) => {
    const { data } = await websocket.get(api.chat.getMessageList, {
        params: formData,
    });
    return data;
};

export const setGroupChattingRoom = async (formData: any) => {
    const { data } = await websocket.post(api.chat.create_group, formData);
    return data;
};
