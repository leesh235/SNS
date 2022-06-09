import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { FileUrl } from "../entity/file_url.entity";
import { getFilePath } from "../utils/fileFunction";
import { Like } from "typeorm";

const userRepository = dataSource.getRepository(User);
const fileRepository = dataSource.getRepository(FileUrl);

export const user_detail = async (req: any) => {
    try {
        const { email } = req.query;

        const result = await userRepository.findOne({
            where: {
                email,
                deletedAt: undefined,
            },
            select: {
                email: true,
                nickName: true,
                birth: true,
                coverImage: true,
                profileImage: true,
                gender: true,
                createdAt: true,
                introduction: true,
            },
        });
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return {};
    }
};

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

export const getAllImages = async (req: any) => {
    try {
        const {
            query: { email },
        } = req;

        const images = await fileRepository.find({
            relations: { post: true },
            where: {
                post: { deletedAt: undefined, user: { email } },
            },
            select: {
                post: {
                    id: true,
                },
                user: {},
                id: true,
                fileUrl: true,
            },
        });

        let result: any[] = [];
        images.forEach((val, idx) => {
            const { id, post, fileUrl } = val;
            result.push({ id, postId: post.id, url: fileUrl });
        });

        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getLatestImage = async (req: any) => {
    try {
        const {
            query: { email },
        } = req;

        const images = await fileRepository.find({
            relations: { post: true },
            where: {
                post: { deletedAt: undefined, user: { email } },
            },
            select: {
                id: true,
                fileUrl: true,
                post: {
                    id: true,
                },
            },
            take: 6,
        });

        let result: any[] = [];
        images.forEach((val, idx) => {
            const { id, post, fileUrl } = val;
            result.push({ id, postId: post.id, url: fileUrl });
        });

        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getPeople = async (req: any) => {
    try {
        const { name } = req.query;

        let where = {};
        if (name) {
            where = {
                deletedAt: undefined,
                nickName: Like(`%${name}%`),
            };
        } else {
            where = {
                deletedAt: undefined,
            };
        }

        const people = await userRepository.find({
            where,
            select: {
                email: true,
                nickName: true,
                profileImage: true,
            },
        });

        return people;
    } catch (error) {
        return [];
    }
};
