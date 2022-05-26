import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    roomId: {
        type: Number,
        required: [true],
    },
    writer: {
        type: String,
        required: [true],
    },
    message: {
        type: String,
        required: [true],
    },
});

export const chat = mongoose.model("chat", chatSchema);
