import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import jwtUtil from "../utils/jwtUtil";
import { redisClient } from "../config/redis";
import { CODE_EXPIRE } from "../constants/times";
import { randomCodeNumber } from "../utils/random";

const userRepository = dataSource.getRepository(User);

export const existUser = async (user: User) => {
    try {
        const findUser = await userRepository.findOne({
            where: { email: user.email },
        });

        if (findUser) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        return true;
    }
};

export const save = async (user: User) => {
    try {
        const result = await userRepository.save(user);
        const accessToken = jwtUtil.access(result.email, result.nickName);
        return accessToken;
    } catch (error) {
        return false;
    }
};

export const logout = async (email: string) => {
    try {
        await redisClient.del(email);
        return true;
    } catch (error) {
        return false;
    }
};

export const createCode = async (email: string) => {
    try {
        const codeNumber = randomCodeNumber();
        await redisClient.set(`${email}_code`, codeNumber, {
            EX: CODE_EXPIRE,
        });

        return {
            status: true,
            codeNumber: codeNumber,
            message: "코드넘버 생성 성공",
        };
    } catch (error) {
        return { status: false, codeNumber: null, message: error };
    }
};

export const verifyCodeNumber = async (email: string, codeNumber: number) => {
    try {
        const dbCodeNumber = await redisClient.get(`${email}_code`);

        if (!dbCodeNumber) return { status: false, message: "인증시간 초과" };

        if (codeNumber !== Number(dbCodeNumber))
            return { status: false, message: "인증번호 불일치" };

        await redisClient.del(`${email}_code`);
        return { status: true, message: "인증 성공" };
    } catch (error) {
        return { status: false, message: error };
    }
};

export const modifyPassword = async (user: User) => {
    try {
        return { status: true, message: "변경 성공" };
    } catch (error) {
        return { status: false, message: error };
    }
};
