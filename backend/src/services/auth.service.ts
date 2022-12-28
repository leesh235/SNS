import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import jwtUtil from "../utils/jwtUtil";
import { redisClient } from "../config/redis";

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
