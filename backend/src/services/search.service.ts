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
                { contents: Like(`%${word}%`) },
                { user: { nickName: Like(`%${word}%`) } },
            ],
            select: {
                user: { nickName: true, profileImage: true },
                contents: true,
                createdAt: true,
            },
        });

        const people = await userRepository.find({
            where: { nickName: Like(`%${word}%`) },
            select: { nickName: true, profileImage: true },
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
