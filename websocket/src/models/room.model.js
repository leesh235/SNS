import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: [true],
        default: Date.now(),
    },
});

export const Room = mongoose.model("Room", roomSchema);
