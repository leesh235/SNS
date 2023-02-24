import { Not } from "typeorm";
import { dataSource } from "../config/typeorm";
import { Friends } from "../entity/friends.entity";

const friendsRepository = dataSource.getRepository(Friends);

/**
 * 팔로우하기/ 취소
 * 팔로잉 목록
 * 팔로워 목록
 * 모든 목록
 */

export const findAllList = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;

        const followingList = await friendsRepository.find({
            relations: {
                requestUser: true,
                responseUser: true,
            },
            where: { requestUser: { email } },
            select: {
                id: true,
                createdAt: true,
                responseUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
                requestUser: {},
            },
            take: 6,
            order: {
                createdAt: "desc",
            },
        });

        const followerList = await friendsRepository.find({
            relations: {
                requestUser: true,
                responseUser: true,
            },
            where: { responseUser: { email } },
            select: {
                id: true,
                createdAt: true,
                requestUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
                responseUser: {},
            },
            take: 6,
            order: {
                createdAt: "desc",
            },
        });

        const result: any = { followingList, followerList };

        return { ok: true, data: result };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const findAllFollowing = async (req: any) => {
    try {
        const {
            query: { take },
            user: { email },
        } = req;

        const limit: number = take ? +take : 6;
        const followingList = await friendsRepository.find({
            relations: {
                requestUser: true,
                responseUser: true,
            },
            where: { requestUser: { email } },
            select: {
                id: true,
                createdAt: true,
                responseUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
                requestUser: {},
            },
            order: {
                createdAt: "DESC",
            },
            take: limit,
        });

        return followingList;
    } catch (error) {
        throw error;
    }
};

export const findAllFollower = async (req: any) => {
    try {
        const {
            query: { take },
            user: { email },
        } = req;

        const limit: number = take ? +take : 6;
        const followerList = await friendsRepository.find({
            relations: {
                requestUser: true,
                responseUser: true,
            },
            where: { responseUser: { email } },
            select: {
                id: true,
                createdAt: true,
                requestUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
                responseUser: {},
            },
            order: {
                createdAt: "DESC",
            },
            take: limit,
        });
        console.log(followerList);
        return followerList;
    } catch (error) {
        throw error;
    }
};

export const follow = async (req: any) => {
    try {
        const {
            body: { friendEmail },
            user: { email },
        } = req;

        const friends = new Friends();
        friends.requestUser = email;
        friends.responseUser = friendEmail;

        let result: any;

        const findOne = await friendsRepository.findOne({
            relations: { requestUser: true, responseUser: true },
            where: {
                requestUser: { email },
                responseUser: { email: friendEmail },
            },
            select: {
                id: true,

                requestUser: {},
                responseUser: {},
            },
        });

        //팔로우 취소
        if (findOne) {
            result = await friendsRepository.delete({ id: findOne.id });
            return false;
        }

        //팔로우하기
        result = await friendsRepository.save(friends);

        return true;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
