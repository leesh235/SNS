import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const chatSchema = new mongoose.Schema({
    _id: { type: ObjectId, required: [true], unique: true },
    message: {
        type: String,
        required: [true],
    },
    createdAt: {
        type: Date,
        required: [true],
        default: Date.now(),
    },
    users: [{ type: ObjectId, ref: "User" }],
    rooms: [{ type: ObjectId, ref: "Room" }],
});

export const Chat = mongoose.model("Chat", chatSchema);
