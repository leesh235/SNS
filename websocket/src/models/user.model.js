import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: { type: String },
    nickName: {
        type: String,
        required: [true],
    },
});

export const User = mongoose.model("User", userSchema);
