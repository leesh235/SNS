import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true],
        unique: true,
    },
    nickName: {
        type: String,
        required: [true],
    },
});

export const User = mongoose.model("User", userSchema);
