import { Room } from "../models/room.model";
import { UserRoom } from "../models/user_room.model";

export const findRoom = async (req) => {
    try {
        const { roomId } = req;
        const rooms = await Room.findOne({ title: roomId });

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

export const createGroupRoom = async (req) => {
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

        let arr = [{ room: room._id.toString(), user: email, title }];
        select.forEach((val, idx) => {
            arr.push({ room: room._id.toString(), user: val.email, title });
        });

        await UserRoom.create(arr);

        return room;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const createRoom = async (req) => {
    try {
        const { friend } = req.body;

        let title;
        if (typeof select === "object") {
            select.forEach((val, idx) => {
                if (idx === 0) title = `${val.nickName}`;
                else title += `,${val.nickName}`;
            });
        }

        const room = await Room.create({
            title,
        });

        let arr = [];
        select.forEach((val, idx) => {
            arr.push({ room: room._id.toString(), user: val.email });
        });

        await UserRoom.create(arr);

        return true;
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
            { room: roomId, user: email },
            { title }
        );
        console.log("modifyRoom: ", result);

        if (result) {
            return result;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
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
