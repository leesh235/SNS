import { UserRoom } from "../models/user_room.model";

export const getRooms = async (req) => {
    try {
        const { email } = req.user;

        const rooms = await UserRoom.find({ user: email })
            .populate("room")
            .select({ room: true, title: true });

        let result = [];
        rooms.map((val) => {
            result.push({
                _id: val.room._id.toString(),
                title: val.title,
            });
        });

        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const joinUserToRoom = async (req) => {
    try {
        const {
            body: { roomId, select },
            user: { email },
        } = req;

        const room = await UserRoom.find({ room: roomId });

        let title = "";
        room.forEach((val, idx) => {
            if (idx === 0) title = `${val.user}`;
            else title += `,${val.user}`;
        });

        select.forEach((val) => {
            title += `,${val}`;
        });

        let arr = [];
        select.forEach((val, idx) => {
            arr.push({ room: roomId, user: val, title });
        });

        await UserRoom.create(arr);

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const leaveUserToRoom = async (req) => {
    try {
        const {
            user: { email },
            body: { roomId },
        } = req;

        const result = await UserRoom.deleteOne({ user: email, room: roomId });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
