import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = (pw: string) => {
    const hashedPw = bcrypt.hashSync(pw, 10);
    return hashedPw;
};

export const comparePassword = async (pw: string, userPw: string) => {
    const checkPassword = await bcrypt.compare(pw, userPw);
    if (!checkPassword) {
        return false;
    }
    return true;
};

export const generateToken = (email: string) => {
    return jwt.sign({ email }, `${process.env.JWT_SECRET}`);
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
