import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
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
            relations = { user: true, likes: true, fileUrl: true };
            where = { deletedAt: undefined, user: { email } };
        } else if (mode === PostMode.LIKE) {
            relations = { user: true, likes: true, fileUrl: true };
            where = { deletedAt: undefined, likes: { userId: email } };
        } else if (mode === PostMode.BOOKMARK) {
            relations = { user: true, likes: true, fileUrl: true };
            where = { deletedAt: undefined };
        } else if (mode === PostMode.FRIENDS) {
            relations = { user: true, likes: true, fileUrl: true };
            where = { deletedAt: undefined };
        } else {
            relations = { user: true, likes: true, fileUrl: true };
            where = { deletedAt: undefined };
        }

        const allList = await postRepository.find({
            relations,
            where,
            select: {
                id: true,
                contents: true,
                createdAt: true,
                user: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
                likes: {
                    status: true,
                },
                fileUrl: {
                    fileUrl: true,
                },
            },
            order: {
                createdAt: "desc",
            },
        });

        let result: any[] = [];

        allList.forEach((val, idx) => {
            const {
                id,
                contents,
                createdAt,
                user: { email, nickName, profileImage },
                likes: { status },
                fileUrl,
            } = val;

            let images: string[] = [];
            fileUrl.forEach((img, cnt) => {
                images.push(img.fileUrl);
            });

            result.push({
                postId: id,
                userId: email,
                writer: nickName,
                profileImage,
                contents,
                createdAt,
                images,
                likeStatus: status,
            });
        });

        return result;
    } catch (error) {
        return [];
    }
};
