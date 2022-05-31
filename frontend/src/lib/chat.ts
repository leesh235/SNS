import { websocket } from "./axios";
import { api } from "../utils/routes";

export const getRoomList = async () => {
    return await websocket.get(api.chat.getRoomList);
};
