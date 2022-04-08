import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = async (pw: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(pw, salt);
    return hashedPw;
};

export const comparePassword = async (pw: string, userPw: string) => {
    const checkPassword = await bcrypt.compareSync(pw, userPw);
    if (!checkPassword) {
        return false;
    }
    return true;
};

export const generateAccessToken = (email: string) => {
    return jwt.sign({ email }, `${process.env.JWT_SECRET}`, {
        expiresIn: "30m",
    });
};

export const generateRefreshToken = (email: string) => {
    return jwt.sign({ email }, `${process.env.JWT_SECRET}`, {
        expiresIn: "7d",
    });
};

export const isAuthenticated = (req: any) => {
    try {
        const user = req.user;
        if (user === undefined || user === null) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        return false;
    }
};
