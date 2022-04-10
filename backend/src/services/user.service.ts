import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { getFilePath } from "../utils/fileFunction";

export const save_image = async (req: any) => {
    try {
        const {
            user,
            body: { mode },
        } = req;

        if (mode === "profile") {
            await dataSource
                .createQueryBuilder()
                .update(User)
                .set({ profileImage: getFilePath(req) })
                .where({ email: user.email })
                .execute();
        } else if (mode === "cover") {
            await dataSource
                .createQueryBuilder()
                .update(User)
                .set({ coverImage: getFilePath(req) })
                .where({ email: user.email })
                .execute();
        } else {
            return false;
        }

        return true;
    } catch (error) {
        return false;
    }
};

export const save_introduce = async (req: any) => {
    try {
        const {
            user,
            body: { introtuce },
        } = req;

        await dataSource
            .createQueryBuilder()
            .update(User)
            .set({ introduction: introtuce })
            .where({ email: user.email })
            .execute();

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
