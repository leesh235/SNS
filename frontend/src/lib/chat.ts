import { websocket } from "./axios";
import { api } from "../utils/routes";

export const getRoomList = async () => {
    return await websocket.get(api.chat.getRoomList);
};

export const getMessageList = async (formData: any) => {
    return await websocket.get(api.chat.getMessageList, {
        params: formData,
    });
};

export const setGroupChattingRoom = async (formData: any) => {
    return await websocket.post(api.chat.create_room, formData);
};

export const deleteRoom = async (formData: any) => {
    return await websocket.post(api.chat.deleteRoom, formData);
};
