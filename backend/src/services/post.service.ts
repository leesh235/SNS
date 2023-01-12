import { dataSource } from "../config/typeorm";
import { Post } from "../entity/post.entity";
import { Likes } from "../entity/likes.entity";
import { Files } from "../entity/files.entity";
import { Comment } from "../entity/comment.entity";
import { deleteFile, fileNameFunc } from "../utils/fileFunction";
import { In, IsNull } from "typeorm";

const postRepository = dataSource.getRepository(Post);
const likesRepository = dataSource.getRepository(Likes);
const fileRepository = dataSource.getRepository(Files);
const commentRepository = dataSource.getRepository(Comment);

export const find = async (req: any, paramId?: number) => {
    try {
        const {
            query: { postId },
            user: { email },
        } = req;
        const id = Number(postId);

        const post = await postRepository.findOne({
            relations: {
                user: true,
                files: true,
                comment: true,
                likes: true,
            },
            where: {
                id,
                user: { email },
                deletedAt: undefined,
            },
            select: {
                id: true,
                contents: true,
                createdAt: true,
                user: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
                files: {
                    id: true,
                    imageUrl: true,
                },
                comment: {
                    id: true,
                },
                likes: {
                    id: true,
                },
            },
            order: {
                createdAt: "desc",
            },
        });

        const isLike = await likesRepository.findOne({
            relations: { post: true, user: true },
            where: {
                post: { id },
                user: { email },
            },
            select: {
                id: true,
            },
        });

        if (post) {
            const result: any = {
                postId: post.id,
                userId: post.user.email,
                writer: post.user.nickName,
                profileImage: post.user.profileImage,
                contents: post.contents,
                createdAt: post.createdAt,
                images: post.files,
                likequantity: (post?.likes as any).length,
                commentquantity: (post?.comment as any).length,
                likeStatus: isLike === null ? false : true,
            };

            return { ok: true, data: result };
        } else {
            return { ok: true, data: "없는 게시글입니다." };
        }
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const save = async (req: any) => {
    try {
        const {
            user: { email, nickName, profileImage },
            body: { contents, images },
        } = req;

        const post = new Post();
        post.contents = contents;
        post.user = email;

        const postSave = await postRepository.save(post);

        const files: number[] = [];
        const urls: string[] = [];
        for (let image of images) {
            files.push(image.id);
            urls.push(image.url);
        }

        await fileRepository.update(
            { id: In(files) },
            { post: { id: postSave.id } }
        );

        const result: any = {
            id: postSave.id,
            email: email,
            writer: nickName,
            profileImage,
            contents,
            createdAt: postSave.createdAt,
            images: urls,
            likequantity: 0,
            commentquantity: 0,
            likeStatus: false,
        };
        return { ok: true, data: result };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const modify = async (req: any) => {
    try {
        const {
            user: { email },
            body: { postId, contents, images },
        } = req;
        const id = Number(postId);

        await postRepository.update({ id }, { contents });

        const imgIdArr1: number[] = [];
        for (let image of images) {
            imgIdArr1.push(image.id);
        }

        const filesFind = await fileRepository.find({
            where: { post: { id }, user: { email } },
            select: { id: true },
        });
        const imgIdArr2: number[] = [];
        for (let fileFind of filesFind) {
            imgIdArr2.push(fileFind.id);
        }

        const newImgArr = imgIdArr2.filter((id) => !imgIdArr1.includes(id));

        await fileRepository.update(
            { id: In(newImgArr) },
            { post: { id: undefined } }
        );

        const post = await postRepository.findOne({
            relations: { files: true },
            where: { id, deletedAt: undefined },
            select: { id: true, contents, files: { id: true, imageUrl: true } },
        });

        return {
            ok: true,
            data: {
                id: post?.id,
                contents: post?.contents,
                images: post?.files,
            },
        };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const setLike = async (req: any) => {
    try {
        const {
            body: { postId },
            user: { email },
        } = req;
        const likes = new Likes();
        likes.user = email;
        likes.post = postId;

        const isLike = await likesRepository.findOne({
            relations: { user: true, post: true },
            where: {
                user: {
                    email,
                },
                post: { id: postId },
            },
            select: {
                id: true,
            },
        });

        if (isLike) {
            await likesRepository.delete({
                user: { email },
                post: { id: postId },
            });

            return { ok: true, data: { isLike: false } };
        } else {
            await likesRepository.save(likes);

            return { ok: true, data: { isLike: true } };
        }
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const remove = async (req: any) => {
    try {
        const {
            query: { postId },
            user: { email },
        } = req;
        const id = Number(postId);

        await postRepository.softDelete({
            id,
            user: { email },
        });

        return { ok: true, data: { id: postId } };
    } catch (error) {
        return { ok: false, data: error };
    }
};
