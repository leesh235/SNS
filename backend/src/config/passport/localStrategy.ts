import { Strategy } from "passport-local";
import { dataSource } from "../typeorm";
import { User } from "../../entity/User.entity";
import jwtUtil from "../../utils/jwtUtil";
import { comparePassword } from "../../utils/password";
import { exist, incorrect } from "../../config/message";
import { redisClient } from "../redis";
import { REFRESHTOKEN_EXPIRE } from "../../constants/times";

const userRepository = dataSource.getRepository(User);

const LocalStrategyOptions: {
    usernameField: string;
    passwordField: string;
} = {
    usernameField: "email",
    passwordField: "password",
};

const localVerify: (
    username: string,
    password: string,
    done: any
) => void = async (username, password, done) => {
    try {
        const user = await userRepository.findOne({
            where: {
                email: username,
            },
            select: {
                email: true,
                nickName: true,
                password: true,
            },
        });

        if (!user) {
            return done(null, false, { message: exist.NOT_EXIST_ACCOUNT });
        }

        if (!(await comparePassword(password, user.password))) {
            return done(null, false, { message: incorrect.INCORRECT_PASSWORD });
        }

        const accessToken = jwtUtil.access(user.email, user.nickName);
        const refreshToken = jwtUtil.refresh();

        await redisClient.set(user.email, refreshToken, {
            EX: REFRESHTOKEN_EXPIRE,
        });

        return done(null, { accessToken, refreshToken });
    } catch (error) {
        return done(error);
    }
};

export default new Strategy(LocalStrategyOptions, localVerify);
