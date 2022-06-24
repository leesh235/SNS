import { Chat } from "../models/chat.model";

export const findChatList = async (req) => {
    try {
        const { roomId } = req.query;

        const chat = await Chat.find({ room: roomId });

        let result = [];
        chat.forEach((val) => {
            result.push({
                _id: val._id.toString(),
                nickName: val.nickName,
                message: val.message,
                userId: val.userId,
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
            _id: chat._id.toString(),
            nickName: chat.nickName,
            message: chat.message,
            roomId: chat.room.toString(),
            userId: chat.userId,
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
