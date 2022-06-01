import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const userRoomSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: [true],
        default: Date.now(),
    },
    user: { type: String, ref: "User" },
    room: { type: ObjectId, ref: "Room" },
});

export const UserRoom = mongoose.model("UserRoom", userRoomSchema);
