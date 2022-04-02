import passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import { dataSource } from "./typeorm";
import { User } from "../entity/User.entity";

const userRepository = dataSource.getRepository(User);

const LocalStrategyOptions: {
    usernameField: string;
    passwordField: string;
} = {
    usernameField: "id",
    passwordField: "password",
};

const jwtStrategyOptions: { jwtFromRequest: any; secretOrKey: any } = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

const localVerify: (
    username: string,
    password: string,
    done: any
) => void = async (username, password, done) => {
    try {
        const user: any = await userRepository.find({
            where: {
                email: username,
            },
        });

        if (!user) {
            return done(null, false, { message: "가입되지 않은 회원입니다." });
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
            return done(null, false, {
                message: "비밀번호가 일치하지 않습니다.",
            });
        }

        return done(null, user);
    } catch (error) {
        return done(error);
    }
};

const jwtVerify = async ({ payload, done }: { payload: any; done: any }) => {
    try {
        const user: any = await userRepository.find({
            where: {
                email: payload.id,
            },
        });

        if (!user) {
            return done(null, false);
        } else {
            return done(null, user);
        }
    } catch (error) {
        return done(error);
    }
};

export default () => {
    passport.use(new LocalStrategy(LocalStrategyOptions, localVerify));
    passport.use(new JWTStrategy(jwtStrategyOptions, jwtVerify));
};
