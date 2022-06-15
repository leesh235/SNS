import { User } from "../models/user.model";

export const getUser = async (req) => {
    try {
        const { userId } = req.query;
        const user = await User.findOne({
            _id: userId,
        });

        return user;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const saveUser = async (req) => {
    try {
        const { email, nickName } = req.body;

        const user = await User.create({
            _id: email,
            nickName,
        });
        console.log("saveUser: ", user);
        return user;
        return;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const modifyUser = async (req) => {
    try {
        return;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const deleteUser = async (req) => {
    try {
        return;
    } catch (error) {
        console.log(error);
        return error;
    }
};
