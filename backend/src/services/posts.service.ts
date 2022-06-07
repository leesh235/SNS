import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
import { Likes } from "../entity/Likes.entity";
import { PostMode } from "../config/enums";

const postRepository = dataSource.getRepository(Post);
const likesRepository = dataSource.getRepository(Likes);

export const findAll = async (req: any, mode?: PostMode) => {
    try {
        const {
            query: { email },
        } = req;
        console.log(email);
        let where = {};
        let relations = {};
        if (mode === PostMode.MY) {
            relations = {
                user: true,
                likes: true,
                fileUrl: true,
                comment: true,
            };
            where = { deletedAt: undefined, user: { email } };
        } else if (mode === PostMode.LIKE) {
            relations = {
                user: true,
                likes: true,
                fileUrl: true,
                comment: true,
            };
            where = { deletedAt: undefined, likes: { userId: email } };
        } else if (mode === PostMode.BOOKMARK) {
            relations = {
                user: true,
                likes: true,
                fileUrl: true,
                comment: true,
            };
            where = { deletedAt: undefined };
        } else if (mode === PostMode.FRIENDS) {
            relations = {
                user: true,
                likes: true,
                fileUrl: true,
                comment: true,
            };
            where = { deletedAt: undefined };
        } else {
            relations = {
                user: true,
                likes: true,
                fileUrl: true,
                comment: true,
            };
            where = { deletedAt: undefined };
        }

        const allList: any = await postRepository.find({
            relations,
            where,
            select: {
                id: true,
                contents: true,
                createdAt: true,
                files: true,
                user: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
                comment: {
                    id: true,
                },
                likes: {
                    id: true,
                },
                fileUrl: {
                    fileUrl: true,
                },
            },
            order: {
                createdAt: "desc",
            },
        });

        const likesstatus: any = await likesRepository.find({
            where: { email },
            select: {
                postName: true,
            },
        });

        let result: any[] = [];

        allList.forEach((val: any, idx: number) => {
            const {
                id,
                contents,
                createdAt,
                files,
                user,
                likes,
                comment,
                fileUrl,
            } = val;

            let images: string[] = [];
            fileUrl.forEach((img: any, cnt: number) => {
                images.push(img.fileUrl);
            });
            let status: boolean = false;

            likesstatus.forEach((val: any) => {
                if (val.postName === id) status = true;
            });

            result.push({
                postId: id,
                userId: user.email,
                writer: user.nickName,
                profileImage: user.profileImage,
                contents,
                createdAt,
                images,
                files,
                likequantity: likes.length,
                commentquantity: comment.length,
                likeStatus: status,
            });
        });

        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const user_posts = async (req: any) => {
    try {
        const { email } = req.query;

        const result = await postRepository.find({
            relations: {
                user: true,
                likes: true,
                fileUrl: true,
                comment: true,
            },
            where: {
                deletedAt: undefined,
                user: {
                    email,
                },
            },
            select: {
                id: true,
                contents: true,
                createdAt: true,
                files: true,
                user: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
                comment: {
                    id: true,
                },
                likes: {
                    id: true,
                },
                fileUrl: {
                    fileUrl: true,
                },
            },
        });

        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
};
