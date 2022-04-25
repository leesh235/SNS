import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
import { getImagePath } from "../utils/fileFunction";
import { PostMode } from "../config/enums";

const postRepository = dataSource.getRepository(Post);

export const findAll = async (req: any, mode?: PostMode) => {
    try {
        const {
            user: { email },
        } = req;

        let where = {};
        let relations = {};
        if (mode === PostMode.MY) {
            relations = { user: true, likes: true };
            where = { deletedAt: undefined, user: { email } };
        } else if (mode === PostMode.LIKE) {
            relations = { user: true, likes: true };
            where = { deletedAt: undefined, likes: { userId: email } };
        } else if (mode === PostMode.BOOKMARK) {
            relations = { user: true, likes: true };
            where = { deletedAt: undefined };
        } else if (mode === PostMode.FRIENDS) {
            relations = { user: true, likes: true };
            where = { deletedAt: undefined };
        } else {
            relations = { user: true, likes: true };
            where = { deletedAt: undefined };
        }

        const allList = await postRepository.find({
            relations,
            where,
            select: {
                contents: true,
                createdAt: true,
                files: true,
                user: {
                    email: true,
                    nickName: true,
                },
                likes: {
                    status: true,
                },
            },
            order: {
                createdAt: "desc",
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
