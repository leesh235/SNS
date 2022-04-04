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

const jwtStrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: `${process.env.JWT_SECRET}`,
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

const jwtVerify = async (payload: any, done: any) => {
    try {
        const user = await userRepository.findOne({
            where: [
                {
                    email: payload.email,
                },
                {
                    deletedAt: undefined,
                },
            ],
            select: {
                email: true,
                nickName: true,
                gender: true,
                birth: true,
                createdAt: true,
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

export const authenticateJWT = (req: any, res: any, next: any) => {
    passport.authenticate("jwt", { session: false }, (error, user) => {
        if (user) {
            console.log(user);
            req.user = user;
        }
        next();
    })(req, res, next);
};

passport.use("local", new LocalStrategy(LocalStrategyOptions, localVerify));
passport.use("jwt", new JWTStrategy(jwtStrategyOptions, jwtVerify));
passport.initialize();
