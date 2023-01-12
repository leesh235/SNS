import { dataSource } from "../config/typeorm";
import { Post } from "../entity/post.entity";
import { Likes } from "../entity/likes.entity";

const postRepository = dataSource.getRepository(Post);

export const findAll = async (req: any) => {
    try {
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

        return { ok: true, data: findList };
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

        return { ok: true, data: findList };
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

        return { ok: true, data: findList };
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

        return { ok: true, data: findList };
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

        return { ok: true, data: findList };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};
