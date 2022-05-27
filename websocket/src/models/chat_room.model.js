import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true],
    },
    title: {
        type: String,
        required: [true],
    },
    createdAt: {
        type: Date,
        required: [true],
        default: Date.now(),
    },
});

export const room = mongoose.model("room", roomSchema);
