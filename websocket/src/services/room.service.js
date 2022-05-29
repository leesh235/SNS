import { Room } from "../models/room.model";

export const findRoom = async (req) => {
    try {
        const { roomId } = req;
        const rooms = await Room.findOne({ title: roomId });
        console.log("findRoom: ", rooms);
        if (!rooms) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const findRoomList = async (req) => {
    try {
        const rooms = await Room.find({});
        console.log(rooms);
        return rooms;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const createRoom = async (req) => {
    try {
        const { roomId } = req;
        console.log("createRoom");
        const room = await Room.create({
            title: roomId,
        });
        console.log("createRoom: ", room);
        return room;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const deleteRoom = async (req) => {
    try {
        console.log("deleteRoom");
        return;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const modifyRoom = async (req) => {
    try {
        console.log("modifyRoom");
        return;
    } catch (error) {
        console.log(error);
        return error;
    }
};
