import { Room } from "../models/room.model";
import { UserRoom } from "../models/user_room.model";

export const createRoom = async (req) => {
    try {
        const {
            body: { select },
            user: { email },
        } = req;

        let title = email;
        if (typeof select === "object") {
            select.forEach((val, idx) => {
                title += `,${val.nickName}`;
            });
        }

        const room = await Room.create({});

        let arr = [{ room: room._id.toString(), userId: email, title }];
        select.forEach((val, idx) => {
            arr.push({ room: room._id.toString(), userId: val.email, title });
        });

        await UserRoom.create(arr);

        return room;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const modifyRoom = async (req) => {
    try {
        const {
            user: { email },
            body: { roomId, title },
        } = req;

        const result = await UserRoom.updateOne(
            { room: roomId, userId: email },
            { title }
        );

        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const deleteRoom = async (req) => {
    try {
        const {
            body: { roomId },
        } = req;

        const result = await Room.deleteOne({ room: roomId });

        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};
