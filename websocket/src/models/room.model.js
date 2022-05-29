import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const roomSchema = new mongoose.Schema({
    _id: {
        type: ObjectId,
        required: [true],
        unique: true,
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

export const Room = mongoose.model("Room", roomSchema);
