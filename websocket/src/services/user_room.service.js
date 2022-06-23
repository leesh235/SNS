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
        const { roomId, users } = req;

        const arr = users.map((user) => {
            return { room: roomId, user: user };
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
        console.log("leaveUserToRoom");
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
