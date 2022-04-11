import passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import { dataSource } from "./typeorm";
import { User } from "../entity/User.entity";
import { generateAccessToken, generateRefreshToken } from "../utils/token";
import { comparePassword } from "../utils/password";
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
        const accessToken = generateAccessToken(user.email);
        // const refreshToken = generateRefreshToken(user.email);

        // await dataSource
        //     .createQueryBuilder()
        //     .update(User)
        //     .set({ nickName: "test", birth: "19960403" })
        //     .where({ email: user.email })
        //     .execute();

        return done(null, { accessToken });
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
                introduction: true,
                coverImage: true,
                profileImage: true,
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

passport.use("local", new LocalStrategy(LocalStrategyOptions, localVerify));
passport.use("jwt", new JWTStrategy(jwtStrategyOptions, jwtVerify));
passport.initialize();

export const jwt_authenticate = passport.authenticate("jwt", {
    session: false,
});

//loader에서 검증가능, ex) app.use(authenticateJWT)
//Unauthorized를 직접 리턴해줘야함
//req.user === false -> res.send(Unauthorized)
export const authenticateJWT = (req: any, res: any, next: any) => {
    passport.authenticate("jwt", { session: false }, (error, user) => {
        if (user) {
            req.user = user;
        } else {
            req.user = false;
        }
        next();
    })(req, res, next);
};
