import jwt from "jsonwebtoken";
import { dataSource } from "../config/typeorm";
import { Token } from "../entity/token.entity";

const tokenRepository = dataSource.getRepository(Token);

const accessToken = (email: string, nickName: string) => {
    return jwt.sign({ email, nickName }, `${process.env.JWT_SECRET}`, {
        expiresIn: "30s",
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

const verifyRefreshToken = async (tokenId: number, email: string) => {
    try {
        const dbRefreshToekn = await tokenRepository.findOne({
            where: { email },
        });
        if (dbRefreshToekn?.id === tokenId) {
            try {
                jwt.verify(dbRefreshToekn.token, `${process.env.JWT_SECRET}`);
                return true;
            } catch (error: any) {
                return false;
            }
        } else return false;
    } catch (error: any) {
        await tokenRepository.delete({
            email,
        });
        return false;
    }
};

export default {
    access: accessToken,
    refresh: refreshToken,
    verifyAccess: verifyAccessToken,
    verifyRefresh: verifyRefreshToken,
};
