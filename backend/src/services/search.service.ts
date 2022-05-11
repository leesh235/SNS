import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { Post } from "../entity/Post.entity";
import { Like } from "typeorm";

const userRepository = dataSource.getRepository(User);
const postRepository = dataSource.getRepository(Post);

export const find = async (word: any, type: "all" | "post" | "people") => {
    try {
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

        let result = {};

        if (type === "post") {
            result = {
                post,
            };
        } else if (type === "people") {
            result = {
                people,
            };
        } else if (type === "all") {
            result = {
                post,
                people,
            };
        } else {
            result = {
                post: [],
                people: [],
            };
        }

        return result;
    } catch (error) {
        return error;
    }
};
