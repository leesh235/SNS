import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { generateAccessToken, generateRefreshToken } from "../utils/token";

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
        await userRepository.save(user);
        const accessToken = generateAccessToken(user.email);
        return accessToken;
    } catch (error) {
        return false;
    }
};
