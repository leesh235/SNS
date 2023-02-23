import { dataSource } from "../config/typeorm";
import { Post } from "../entity/post.entity";
import { Files } from "../entity/files.entity";
import { Likes } from "../entity/likes.entity";
import { Comment } from "../entity/comment.entity";
import { User } from "../entity/user.entity";
import { In } from "typeorm";

const userRepository = dataSource.getRepository(User);
const postRepository = dataSource.getRepository(Post);
const fileRepository = dataSource.getRepository(Files);
const likesRepository = dataSource.getRepository(Likes);
const commentRepository = dataSource.getRepository(Comment);

export const find = async (req: any) => {
    try {
        const {
            user,
            query: { postId },
        } = req;

        const likeQb = likesRepository
            .createQueryBuilder("likes")
            .subQuery()
            .select([
                "likes.post_id AS postId",
                "COUNT(likes.post_id) AS likeQuantity",
            ])
            .from(Likes, "likes")
            .groupBy("likes.post_id")
            .getQuery();

        const commentQb = commentRepository
            .createQueryBuilder("comment")
            .subQuery()
            .select([
                "comment.post_id AS postId",
                "COUNT(comment.post_id) AS commentQuantity",
            ])
            .from(Comment, "comment")
            .groupBy("comment.post_id")
            .getQuery();

        const find = await postRepository
            .createQueryBuilder("post")
            .leftJoinAndSelect("post.user", "user")
            .leftJoinAndSelect(
                "post.likes",
                "likes",
                "likes.user_id = :email and likes.post_id = post.id",
                { email: user.email }
            )
            .leftJoinAndSelect(commentQb, "comment", "post.id = comment.postId")
            .leftJoinAndSelect(likeQb, "like", "post.id = like.postId")
            .select([
                "post.id AS id",
                "post.contents AS contents",
                "post.create_date AS createAt",
                "user.email AS email",
                "user.nickName AS nickName",
                "user.profileImage AS profileImage",
                "IFNULL(comment.commentQuantity, 0) AS commentQuantity",
                "IFNULL(like.likeQuantity, 0) AS likeQuantity",
                "CASE WHEN likes.id IS NULL THEN false ELSE true END AS likeStatus",
            ])
            .where("post.id = :postId ", {
                postId: Number(postId),
            })
            .orderBy("post.create_date", "DESC")
            .getRawOne();

        return { ok: true, data: find };
    } catch (error) {
        console.log(error);
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

        const findUser = await userRepository.findOne({
            where: { email },
            select: { email: true, profileImage: true },
        });
        const postSave = await postRepository.save(post);

        if (images?.length !== 0) {
            const ids: number[] = [];
            for (let image of images) {
                ids.push(image.id);
            }
            await fileRepository.update(
                { id: In(ids) },
                { post: { id: postSave.id }, user: { email } }
            );
        }

        const imageList = await fileRepository.find({
            where: { post: { id: postSave.id } },
            select: {
                id: true,
                imageUrl: true,
            },
        });

        const result: any = {
            id: postSave.id,
            email: email,
            writer: nickName,
            profileImage: findUser?.profileImage,
            contents,
            createAt: postSave.createdAt,
            images: imageList,
            likeQuantity: 0,
            commentQuantity: 0,
            likeStatus: false,
        };
        return { ok: true, data: result };
    } catch (error) {
        console.log(error);
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
            await likesRepository.insert(likes);

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
