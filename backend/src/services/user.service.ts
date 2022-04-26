import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { Post } from "../entity/Post.entity";
import { Friends } from "../entity/Friends.entity";
import { getFilePath, getAllImage, getTermsImage } from "../utils/fileFunction";
import { IsNull, Like, Not } from "typeorm";

const userRepository = dataSource.getRepository(User);
const friendsRepository = dataSource.getRepository(Friends);
const postRepository = dataSource.getRepository(Post);

export const save_image = async (req: any) => {
    try {
        const {
            user,
            body: { mode },
        } = req;

        let setData = {};

        if (mode === "profile") {
            setData = { profileImage: getFilePath(req) };
        } else if (mode === "cover") {
            setData = { coverImage: getFilePath(req) };
        } else {
            return false;
        }

        await dataSource
            .createQueryBuilder()
            .update(User)
            .set(setData)
            .where({ email: user.email })
            .execute();

        return true;
    } catch (error) {
        return false;
    }
};

export const save_introduce = async (req: any) => {
    try {
        const {
            user,
            body: { introduce },
        } = req;

        await dataSource
            .createQueryBuilder()
            .update(User)
            .set({ introduction: introduce })
            .where({ email: user.email })
            .execute();

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const getUserImage = async (req: any) => {
    try {
        const {
            user,
            body: { mode },
        } = req;

        let select = {};

        if (mode === "profile") {
            select = { profileImage: true };
        } else if (mode === "cover") {
            select = { coverImage: true };
        }

        const findUser = await userRepository.findOne({
            where: [
                { email: user.email },
                {
                    deletedAt: undefined,
                },
            ],
            select,
        });
        return findUser;
    } catch (error) {
        return null;
    }
};

export const getAllImages = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;
        const posts = await postRepository.find({
            relations: { user: true },
            where: {
                user: { email },
                deletedAt: undefined,
                files: Not(IsNull()),
            },
            select: { id: true, files: true, user: {} },
            order: {
                createdAt: "desc",
            },
        });

        return getAllImage(email, posts);
    } catch (error) {
        return [];
    }
};

export const getLatestImage = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;
        const posts = await postRepository.find({
            relations: { user: true },
            where: {
                user: { email },
                deletedAt: undefined,
                files: Not(IsNull()),
            },
            select: { id: true, files: true, user: {} },
            order: {
                createdAt: "desc",
            },
        });
        return getTermsImage(email, posts);
    } catch (error) {
        return [];
    }
};

export const setFriend = async (req: any, mode: "req" | "res") => {
    try {
        const {
            body,
            user: { email },
        } = req;
        const friends = new Friends();
        friends.userOne = email;
        friends.userTwo = body.email;

        if (mode === "req") {
            await friendsRepository.save(friends);
        } else {
            await dataSource
                .createQueryBuilder()
                .update(Friends)
                .set({ status: true })
                .where({ id: body.id })
                .execute();
        }
        return true;
    } catch (error) {
        return false;
    }
};

export const getFriendList = async (req: any, mode?: "await") => {
    try {
        const {
            user: { email },
        } = req;

        let status = mode === "await" ? false : true;

        const friends = await friendsRepository.find({
            where: [
                { userOne: email, status },
                { userTwo: email, status },
            ],
        });
        let result = [];
        for (let i = 0; i < friends.length; i++) {
            result.push(
                friends[i].userOne === email
                    ? friends[i].userTwo
                    : friends[i].userOne
            );
        }
        return result;
    } catch (error) {
        return [];
    }
};

export const getPeople = async (req: any) => {
    try {
        const { name } = req.query;

        let where = {};
        if (name) {
            where = {
                deletedAt: undefined,
                nickName: Like(`%${name}%`),
            };
        } else {
            where = {
                deletedAt: undefined,
            };
        }

        const people = await userRepository.find({
            where,
            select: {
                email: true,
                nickName: true,
                profileImage: true,
            },
        });

        return people;
    } catch (error) {
        return [];
    }
};
