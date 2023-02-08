import { dataSource } from "../config/typeorm";
import { Post } from "../entity/post.entity";
import { Likes } from "../entity/likes.entity";
import { Comment } from "../entity/comment.entity";
import { Not } from "typeorm";

const postRepository = dataSource.getRepository(Post);
const likesRepository = dataSource.getRepository(Likes);
const commentRepository = dataSource.getRepository(Comment);

export const findAll = async (req: any) => {
    try {
        const { user } = req;

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
            .orderBy("post.create_date", "DESC")
            .getRawMany();

        const imageList = await postRepository.find({
            relations: { files: true },
            where: { deletedAt: undefined, files: { post: Not(undefined) } },
            select: {
                id: true,
                files: { id: true, imageUrl: true },
            },
        });

        const result: any = {};

        findList.forEach((val) => {
            let images: any[] = [];
            if (imageList)
                images = imageList.filter((img) => img.id === val.id);
            return (result[val.id] = { ...val, images });
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
            .orderBy("post.create_date", "DESC")
            .getRawMany();

        const imageList = await postRepository.find({
            relations: { files: true },
            where: { deletedAt: undefined, files: { post: Not(undefined) } },
            select: {
                id: true,
                files: { id: true, imageUrl: true },
            },
        });

        const result: any = {};

        findList.forEach((val) => {
            let images: any[] = [];
            if (imageList)
                images = imageList.filter((img) => img.id === val.id);
            return (result[val.id] = { ...val, images });
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
            .where("likes.user_id = :email", { email })
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
            query: { email },
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
            .where("post.writer = :email", { email })
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
