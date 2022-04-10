import jwt from "jsonwebtoken";

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
