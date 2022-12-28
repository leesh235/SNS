import jwt from "jsonwebtoken";
import { dataSource } from "../config/typeorm";
import { Token } from "../entity/token.entity";
import { redisClient } from "../config/redis";

const tokenRepository = dataSource.getRepository(Token);

const accessToken = (email: string, nickName: string) => {
    return jwt.sign({ email, nickName }, `${process.env.JWT_SECRET}`, {
        expiresIn: "1h",
    });
};

const refreshToken = () => {
    return jwt.sign({}, `${process.env.JWT_SECRET}`, {
        expiresIn: "7d",
    });
};

const verifyAccessToken = (token: string) => {
    try {
        const result = jwt.verify(token, `${process.env.JWT_SECRET}`);
        return {
            ok: true,
            payload: result,
        };
    } catch (error: any) {
        return {
            ok: false,
            payload: error.message,
        };
    }
};

const verifyRefreshToken = async (refreshToekn: string, email: string) => {
    try {
        const dbRefreshToekn = await redisClient.get(email);
        if (dbRefreshToekn === refreshToekn) {
            try {
                jwt.verify(dbRefreshToekn, `${process.env.JWT_SECRET}`);
                return true;
            } catch (error: any) {
                await redisClient.del(email);
                return false;
            }
        } else return false;
    } catch (error: any) {
        return false;
    }
};

export default {
    access: accessToken,
    refresh: refreshToken,
    verifyAccess: verifyAccessToken,
    verifyRefresh: verifyRefreshToken,
};
