import { Strategy } from "passport-local";
import { dataSource } from "../typeorm";
import { User } from "../../entity/User.entity";
import { Token } from "../../entity/token.entity";
import { generateAccessToken, generateRefreshToken } from "../../utils/token";
import { comparePassword } from "../../utils/password";
import { exist, incorrect } from "../../config/message";

const userRepository = dataSource.getRepository(User);
const tokenRepository = dataSource.getRepository(Token);

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

        const accessToken = generateAccessToken({
            email: user.email,
            nickName: user.nickName,
        });

        const refreshToken = generateRefreshToken();
        const token = new Token();
        token.token = refreshToken;
        const tokenId = await tokenRepository.save(token);

        return done(null, { accessToken, tokenId: tokenId.id });
    } catch (error) {
        return done(error);
    }
};

export default new Strategy(LocalStrategyOptions, localVerify);
