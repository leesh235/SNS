import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { getFilePath } from "../utils/fileFunction";

const userRepository = dataSource.getRepository(User);

export const save_image = async (req: any) => {
    try {
        const {
            user,
            body: { mode },
        } = req;

        let setData = {};

        if (mode === "profile") {
            setData = { profileImage: getFilePath(req) };
        } else if (mode === "cover") {
            setData = { coverImage: getFilePath(req) };
        } else {
            return false;
        }

        await dataSource
            .createQueryBuilder()
            .update(User)
            .set(setData)
            .where({ email: user.email })
            .execute();

        return true;
    } catch (error) {
        return false;
    }
};

export const save_introduce = async (req: any) => {
    try {
        const {
            user,
            body: { introduce },
        } = req;

        await dataSource
            .createQueryBuilder()
            .update(User)
            .set({ introduction: introduce })
            .where({ email: user.email })
            .execute();

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const getUserImage = async (req: any) => {
    try {
        const {
            user,
            body: { mode },
        } = req;

        let select = {};

        if (mode === "profile") {
            select = { profileImage: true };
        } else if (mode === "cover") {
            select = { coverImage: true };
        }

        const findUser = await userRepository.findOne({
            where: [
                { email: user.email },
                {
                    deletedAt: undefined,
                },
            ],
            select,
        });
        return findUser;
    } catch (error) {
        return null;
    }
};
