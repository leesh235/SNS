import passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import { dataSource } from "./typeorm";
import { User } from "../entity/User.entity";
import { comparePassword } from "../services/auth.service";
import { exist, incorrect } from "../config/message";

const userRepository = dataSource.getRepository(User);

const LocalStrategyOptions: {
    usernameField: string;
    passwordField: string;
} = {
    usernameField: "email",
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
        const user = await userRepository.findOne({
            where: {
                email: username,
            },
            select: {
                email: true,
                password: true,
            },
        });

        if (!user) {
            return done(null, false, { message: exist.NOT_EXIST_ACCOUNT });
        }

        if (!(await comparePassword(password, user.password))) {
            return done(null, false, { message: incorrect.INCORRECT_PASSWORD });
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
                email: payload.email,
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
    passport.initialize();
    passport.use("local", new LocalStrategy(LocalStrategyOptions, localVerify));
    passport.use("jwt", new JWTStrategy(jwtStrategyOptions, jwtVerify));
};
