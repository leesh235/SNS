import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const chatSchema = new mongoose.Schema({
    message: {
        type: String,
        required: [true],
    },
    createdAt: {
        type: Date,
        required: [true],
        default: Date.now(),
    },
    userId: {
        type: String,
        required: [true],
    },
    nickName: {
        type: String,
        required: [true],
    },
    room: { type: ObjectId, ref: "Room" },
});

export const Chat = mongoose.model("Chat", chatSchema);
