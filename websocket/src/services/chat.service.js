import { Chat } from "../models/chat.model";

export const findChatList = async (req) => {
    try {
        const { roomId } = req.query;

        const chat = await Chat.find({ room: roomId }).populate("user");
        let result = [];

        chat.forEach((val) => {
            result.push({
                _id: val._id,
                nickName: val.user.nickName,
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
        const { roomId, userId, msg } = req;

        const chat = await Chat.create({
            room: roomId,
            user: userId,
            message: msg,
        }).then((data) => data.populate("user"));

        return chat;
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
