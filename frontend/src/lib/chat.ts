import { websocket } from "./axios";
import { api } from "../utils/routes";

const roomList = async () => {
    return await websocket.get(api.chat.getRoomList);
};

const messageList = async (formData: any) => {
    return await websocket.get(api.chat.getMessageList, {
        params: formData,
    });
};

const groupChattingRoom = async (formData: any) => {
    return await websocket.post(api.chat.create_room, formData);
};

const deleteRoom = async (formData: any) => {
    return await websocket.post(api.chat.deleteRoom, formData);
};

export default {
    roomList,
    messageList,
    groupChattingRoom,
    deleteRoom,
};
