import { dataSource } from "../config/typeorm";
import { Post } from "../entity/post.entity";
import { Likes } from "../entity/likes.entity";
import { Comment } from "../entity/comment.entity";
import { Files } from "../entity/files.entity";
import { IsNull, Not } from "typeorm";

const fileRepository = dataSource.getRepository(Files);
const postRepository = dataSource.getRepository(Post);
const likesRepository = dataSource.getRepository(Likes);
const commentRepository = dataSource.getRepository(Comment);

export const findAll = async (req: any) => {
    try {
        const {
            user,
            query: { take },
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

        const findList = await postRepository
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
                "user.email AS userId",
                "user.nickName AS writer",
                "user.profileImage AS profileImage",
                "IFNULL(comment.commentQuantity, 0) AS commentQuantity",
                "IFNULL(like.likeQuantity, 0) AS likeQuantity",
                "CASE WHEN likes.id IS NULL THEN false ELSE true END AS likeStatus",
            ])
            .limit(Number(take))
            .orderBy("post.create_date", "DESC")
            .getRawMany();

        const imageList = await fileRepository.find({
            relations: { post: true },
            where: { post: { id: Not(IsNull()), deletedAt: undefined } },
            select: {
                id: true,
                imageUrl: true,
                post: {
                    id: true,
                },
            },
        });
        const result: any = [];

        findList.forEach((val) => {
            const images: any[] = imageList.filter(
                (img) => img.post?.id === val.id
            );
            return result.push({ ...val, images });
        });

        return { ok: true, data: result };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const findMy = async (req: any) => {
    try {
        const {
            user: { email },
            query: { take },
        } = req;
        const limit: number = take ? +take : 6;
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

        const findList = await postRepository
            .createQueryBuilder("post")
            .leftJoinAndSelect("post.user", "user")
            .leftJoinAndSelect(
                "post.likes",
                "likes",
                "likes.user_id = :email and likes.post_id = post.id",
                { email }
            )
            .leftJoinAndSelect(commentQb, "comment", "post.id = comment.postId")
            .leftJoinAndSelect(likeQb, "like", "post.id = like.postId")
            .select([
                "post.id AS id",
                "post.contents AS contents",
                "post.create_date AS createAt",
                "user.email AS userId",
                "user.nickName AS writer",
                "user.profileImage AS profileImage",
                "IFNULL(comment.commentQuantity, 0) AS commentQuantity",
                "IFNULL(like.likeQuantity, 0) AS likeQuantity",
                "CASE WHEN likes.id IS NULL THEN false ELSE true END AS likeStatus",
            ])
            .where("post.writer = :email", { email })
            .limit(limit)
            .orderBy("post.create_date", "DESC")
            .getRawMany();

        const imageList = await fileRepository.find({
            relations: { post: true, user: true },
            where: { post: { id: Not(IsNull()), deletedAt: undefined } },
            select: {
                id: true,
                imageUrl: true,
                post: {
                    id: true,
                },
            },
        });

        const result: any = [];

        findList.forEach((val) => {
            const images: any[] = imageList.filter(
                (img) => img.post.id === val.id
            );
            return result.push({ ...val, images });
        });

        return { ok: true, data: result };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const findLike = async (req: any) => {
    try {
        const {
            user: { email },
            query: { take },
        } = req;

        const limit: number = take ? +take : 6;
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

        const findList = await postRepository
            .createQueryBuilder("post")
            .leftJoinAndSelect("post.user", "user")
            .leftJoinAndSelect(
                "post.likes",
                "likes",
                "likes.user_id = :email and likes.post_id = post.id",
                { email }
            )
            .leftJoinAndSelect(commentQb, "comment", "post.id = comment.postId")
            .leftJoinAndSelect(likeQb, "like", "post.id = like.postId")
            .select([
                "post.id AS id",
                "post.contents AS contents",
                "post.create_date AS createAt",
                "user.email AS userId",
                "user.nickName AS writer",
                "user.profileImage AS profileImage",
                "IFNULL(comment.commentQuantity, 0) AS commentQuantity",
                "IFNULL(like.likeQuantity, 0) AS likeQuantity",
                "CASE WHEN likes.id IS NULL THEN false ELSE true END AS likeStatus",
            ])
            .where("post.writer = :email", { email })
            .limit(limit)
            .orderBy("post.create_date", "DESC")
            .getRawMany();

        const imageList = await fileRepository.find({
            relations: { post: true, user: true },
            where: { post: { id: Not(IsNull()), deletedAt: undefined } },
            select: {
                id: true,
                imageUrl: true,
                post: {
                    id: true,
                },
            },
        });

        const result: any = [];

        findList.forEach((val) => {
            if (val.likeStatus === "0") return;
            const images: any[] = imageList.filter(
                (img) => img.post.id === val.id
            );
            return result.push({ ...val, images });
        });

        return { ok: true, data: result };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const findBookmark = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;

        const findList = await postRepository
            .createQueryBuilder("post")
            .leftJoinAndSelect("post.user", "user")
            .leftJoinAndSelect("post.comment", "comment")
            .leftJoinAndSelect("post.likes", "likes")
            .select([
                "post.id AS id",
                "post.contents AS contents",
                "post.create_date AS createAt",
                "user.email AS email",
                "user.nickName AS nickName",
                "user.profileImage AS profileImage",
                "count(comment.post_id) AS commentQuantity",
                "count(likes.post_id) AS likeQuantity",
            ])
            .groupBy("comment.post_id, post.id, likes.post_id")
            .orderBy("post.create_date", "DESC")
            .getRawMany();

        const result: any = {};

        findList.forEach(
            (val) =>
                (result[val.id] = { ...val, likeStatus: false, images: [] })
        );

        return { ok: true, data: result };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const findUserList = async (req: any) => {
    try {
        const {
            user: { email },
            query: { take, userId },
        } = req;
        const limit: number = take ? +take : 6;
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

        const findList = await postRepository
            .createQueryBuilder("post")
            .leftJoinAndSelect("post.user", "user")
            .leftJoinAndSelect(
                "post.likes",
                "likes",
                "likes.user_id = :email and likes.post_id = post.id",
                { email }
            )
            .leftJoinAndSelect(commentQb, "comment", "post.id = comment.postId")
            .leftJoinAndSelect(likeQb, "like", "post.id = like.postId")
            .select([
                "post.id AS id",
                "post.contents AS contents",
                "post.create_date AS createAt",
                "user.email AS userId",
                "user.nickName AS writer",
                "user.profileImage AS profileImage",
                "IFNULL(comment.commentQuantity, 0) AS commentQuantity",
                "IFNULL(like.likeQuantity, 0) AS likeQuantity",
                "CASE WHEN likes.id IS NULL THEN false ELSE true END AS likeStatus",
            ])
            .where("post.writer = :email", { email: userId })
            .limit(limit)
            .orderBy("post.create_date", "DESC")
            .getRawMany();

        const imageList = await fileRepository.find({
            relations: { post: true, user: true },
            where: { post: { id: Not(IsNull()), deletedAt: undefined } },
            select: {
                id: true,
                imageUrl: true,
                post: {
                    id: true,
                },
            },
        });

        const result: any = [];

        findList.forEach((val) => {
            const images: any[] = imageList.filter(
                (img) => img.post.id === val.id
            );
            return result.push({ ...val, images });
        });

        return { ok: true, data: result };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};
