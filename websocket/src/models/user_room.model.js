import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const userRoomSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: [true],
        default: Date.now(),
    },
    users: [{ type: ObjectId, ref: "User" }],
    rooms: [{ type: ObjectId, ref: "Room" }],
});

export const UserRoom = mongoose.model("UserRoom", userRoomSchema);
