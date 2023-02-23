import { ExtractJwt, Strategy } from "passport-jwt";
import { dataSource } from "../typeorm";
import { User } from "../../entity/user.entity";

const userRepository = dataSource.getRepository(User);

const jwtStrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: `${process.env.JWT_SECRET}`,
};

const jwtVerify = async (payload: any, done: any) => {
    const user = new User();
    try {
        const findMy = await userRepository.findOne({
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
                introduce: true,
                coverImage: true,
                profileImage: true,
                grade: true,
            },
        });

        if (!findMy) {
            return done(null, user);
        } else {
            user.email = findMy?.email;
            user.nickName = findMy?.nickName;
            user.profileImage = findMy?.profileImage;
            return done(null, user);
        }
    } catch (error) {
        return done(error, user);
    }
};

export default new Strategy(jwtStrategyOptions, jwtVerify);
