import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
import { Likes } from "../entity/Likes.entity";
import { PostMode } from "../config/enums";
import { findAllModeUtil } from "../utils/typeormUtil";

const postRepository = dataSource.getRepository(Post);
const likesRepository = dataSource.getRepository(Likes);

export const findAll = async (req: any, mode?: PostMode) => {
    try {
        const {
            user: { email },
        } = req;

        const where = findAllModeUtil(email, mode, { deletedAt: undefined });

        const allList: any = await postRepository.find({
            relations: {
                user: true,
                likes: true,
                fileUrl: true,
                comment: true,
            },
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
                    user: {
                        email: true,
                    },
                },
                fileUrl: {
                    fileUrl: true,
                },
            },
            order: {
                createdAt: "desc",
            },
        });

        const likeStatus: any = await likesRepository.find({
            relations: { user: true, post: true },
            where: { user: { email } },
            select: {
                id: true,
                post: { id: true },
                user: { email: true },
            },
        });

        let result: any[] = [];
        let obj: any = {};
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
            likeStatus.forEach((val: any, idx: number) => {
                if (val.post.id === id) {
                    status = true;
                    return;
                }
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
            obj[`${id}`] = {
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
            };
        });
        return obj;
        return { postIdList: result, postDetailList: obj };
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const findPostIds = async (req: any, mode?: PostMode) => {
    try {
        const {
            user: { email },
        } = req;

        const where = findAllModeUtil(email, mode, { deletedAt: undefined });

        const allList: any[] = await postRepository.find({
            relations: {
                user: true,
                likes: true,
                fileUrl: true,
                comment: true,
            },
            where,
            select: {
                id: true,
                user: {},
                fileUrl: {},
                likes: {},
                comment: {},
            },
            order: {
                createdAt: "desc",
            },
        });

        let result: any[] = [];

        allList.forEach((val: any) => {
            result.push(val?.id);
        });

        return result;
    } catch (error) {
        console.group(error);
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
