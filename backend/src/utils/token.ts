import jwt from "jsonwebtoken";

interface Props {
    email: string;
    nickName: string;
}

export const generateAccessToken = ({ email, nickName }: Props) => {
    console.log(nickName);
    return jwt.sign(
        { email, nickName },
        `${process.env.JWT_SECRET}`
        // , {
        //     expiresIn: "30m",
        // }
    );
};

export const generateRefreshToken = ({ email, nickName }: Props) => {
    return jwt.sign({ email, nickName }, `${process.env.JWT_SECRET}`, {
        expiresIn: "7d",
    });
};
