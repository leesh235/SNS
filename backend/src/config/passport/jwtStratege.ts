import { ExtractJwt, Strategy } from "passport-jwt";
import { dataSource } from "../typeorm";
import { User } from "../../entity/user.entity";

const userRepository = dataSource.getRepository(User);

const jwtStrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: `${process.env.JWT_SECRET}`,
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
                grade: true,
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

export default new Strategy(jwtStrategyOptions, jwtVerify);
