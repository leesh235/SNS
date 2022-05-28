import { Room } from "../models/chat_room.model";

export const findRoom = async (req) => {
    try {
        const rooms = await Room.find({});
        console.log(rooms);
        return rooms;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const findRoomList = async (req) => {
    try {
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const createRoom = async (req) => {
    try {
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const deleteRoom = async (req) => {
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
