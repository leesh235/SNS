import { dataSource } from "../config/typeorm";
import { User } from "../entity/user.entity";
import { Post } from "../entity/post.entity";
import { Like } from "typeorm";
import { Friends } from "../entity/friends.entity";

const userRepository = dataSource.getRepository(User);
const postRepository = dataSource.getRepository(Post);
const friendsRepository = dataSource.getRepository(Friends);

export const findAll = async (req: any) => {
    try {
        const {
            query: { word },
        } = req;

        const post = await postRepository.find({
            relations: { user: true },
            where: [
                { deletedAt: undefined, contents: Like(`%${word}%`) },
                { deletedAt: undefined, user: { nickName: Like(`%${word}%`) } },
            ],
            select: {
                id: true,
                user: { email: true, nickName: true, profileImage: true },
                contents: true,
                createdAt: true,
            },
        });

        const people = await userRepository.find({
            where: { deletedAt: undefined, nickName: Like(`%${word}%`) },
            select: { email: true, nickName: true, profileImage: true },
        });

        return { ok: true, data: { post, people } };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const findPosts = async (req: any) => {
    try {
        const {
            query: { word },
        } = req;

        const post = await postRepository.find({
            relations: { user: true },
            where: [
                { deletedAt: undefined, contents: Like(`%${word}%`) },
                { deletedAt: undefined, user: { nickName: Like(`%${word}%`) } },
            ],
            select: {
                id: true,
                user: { email: true, nickName: true, profileImage: true },
                contents: true,
                createdAt: true,
            },
        });

        return { ok: true, data: post };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const findPeople = async (req: any) => {
    try {
        const {
            query: { word },
        } = req;

        const people = await userRepository.find({
            where: { deletedAt: undefined, nickName: Like(`%${word}%`) },
            select: { email: true, nickName: true, profileImage: true },
        });

        return { ok: true, data: people };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const findFriends = async (req: any) => {
    try {
        const {
            query: { word },
            user: { email },
        } = req;

        const friend1 = await friendsRepository.find({
            relations: { requestUser: true, responseUser: true },
            where: {
                status: true,
                requestUser: {
                    email,
                },
                responseUser: {
                    nickName: Like(`%${word}%`),
                },
            },
            select: {
                id: true,
                responseUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
            },
        });

        const friend2 = await friendsRepository.find({
            relations: { requestUser: true, responseUser: true },
            where: {
                status: true,
                responseUser: {
                    email,
                },
                requestUser: {
                    nickName: Like(`%${word}%`),
                },
            },
            select: {
                id: true,
                requestUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
            },
        });

        const result: any[] = [...friend1, ...friend2];

        return { ok: true, data: result };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};
