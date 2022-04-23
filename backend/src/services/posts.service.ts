import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
import { getImagePath } from "../utils/fileFunction";

const postRepository = dataSource.getRepository(Post);

export const findAll = async (req: any, mode?: "my" | "like" | "bookmark") => {
    try {
        const {
            user: { email },
        } = req;

        let where = {};
        if (mode === "my") {
            where = { deletedAt: undefined, user: { email } };
        } else if (mode === "like") {
            where = { deletedAt: undefined };
        } else if (mode === "bookmark") {
            where = { deletedAt: undefined };
        } else {
            where = { deletedAt: undefined };
        }

        const allList = await postRepository.find({
            relations: {
                user: true,
            },
            where: { deletedAt: undefined },
            select: {
                contents: true,
                createdAt: true,
                files: true,
                user: {
                    email: true,
                    nickName: true,
                },
            },
        });
        let result: any[] = [];
        for (let i = 0; i < allList.length; i++) {
            const {
                contents,
                createdAt,
                files,
                user: { email, nickName },
            } = allList[i];
            let images: string[] = getImagePath(email, files);
            result.push({ writer: nickName, contents, createdAt, images });
        }
        return result;
    } catch (error) {
        return [];
    }
};

export const findFriendsAll = async (req: any) => {
    try {
        const allList = await postRepository.find({
            relations: {
                user: true,
            },
            where: { deletedAt: undefined },
            select: {
                contents: true,
                createdAt: true,
                files: true,
                user: {
                    email: true,
                    nickName: true,
                },
            },
        });
        let result: any[] = [];
        for (let i = 0; i < allList.length; i++) {
            const {
                contents,
                createdAt,
                files,
                user: { email, nickName },
            } = allList[i];
            let images: string[] = getImagePath(email, files);
            result.push({ writer: nickName, contents, createdAt, images });
        }
        return result;
    } catch (error) {
        return [];
    }
};
