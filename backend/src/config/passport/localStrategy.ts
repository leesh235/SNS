import { Strategy } from "passport-local";
import { dataSource } from "../typeorm";
import { User } from "../../entity/User.entity";
import jwtUtil from "../../utils/jwtUtil";
import { comparePassword } from "../../utils/password";
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
            return done(null, false, {
                message: "존재하지 않거나 정보가 잘못되었습니다.",
            });
        }

        if (!(await comparePassword(password, user.password))) {
            return done(null, false, { message: "비밀번호가 다릅니다." });
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
