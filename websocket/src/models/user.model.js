import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    _id: {
        type: ObjectId,
        required: [true],
        unique: true,
    },
    nickName: {
        type: String,
        required: [true],
    },
});

export const User = mongoose.model("User", userSchema);
