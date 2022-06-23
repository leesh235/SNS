import { Chat } from "../models/chat.model";

export const findChatList = async (req) => {
    try {
        const { roomId } = req.query;

        const chat = await Chat.find({ room: roomId });

        let result = [];
        chat.forEach((val) => {
            result.push({
                _id: val._id,
                nickName: val.nickName,
                message: val.message,
            });
        });

        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const createChat = async (req) => {
    try {
        const { roomId, userId, nickName, msg } = req.body;

        const chat = await Chat.create({
            room: roomId,
            userId,
            nickName: nickName,
            message: msg,
        });

        return {
            nickName: chat.nickName,
            message: chat.message,
            roomId: chat.room.toString(),
        };
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const deleteChat = async (req) => {
    try {
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const modifyRoom = async (req) => {
    try {
    } catch (error) {
        console.log(error);
        return error;
    }
};
