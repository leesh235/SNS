import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    id: { type: Number, required: [true] },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "chat",
    },
    writer: {
        type: String,
        required: [true],
    },
    message: {
        type: String,
        required: [true],
    },
    createdAt: {
        type: Date,
        required: [true],
        default: Date.now(),
    },
});

export const Chat = mongoose.model("Chat", chatSchema);
