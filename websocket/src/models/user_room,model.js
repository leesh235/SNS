import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const userRoomSchema = new mongoose.Schema({
    _id: {
        type: ObjectId,
        required: [true],
        unique: true,
    },
    createdAt: {
        type: Date,
        required: [true],
        default: Date.now(),
    },
    users: [{ type: ObjectId, ref: "User" }],
    rooms: [{ type: ObjectId, ref: "Room" }],
});

export const UserRoom = mongoose.model("UserRoom", userRoomSchema);
