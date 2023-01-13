import { In, Not, Like } from "typeorm";
import { dataSource } from "../config/typeorm";
import { Friends } from "../entity/friends.entity";
import { Likes } from "../entity/likes.entity";

const friendsRepository = dataSource.getRepository(Friends);

export const request = async (req: any) => {
    try {
        const {
            body: { friendEmail },
            user: { email },
        } = req;

        const friends = new Friends();
        friends.requestUser = email;
        friends.responseUser = friendEmail;

        const save = await friendsRepository.save(friends);

        return { ok: true, data: save };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const response = async (req: any) => {
    try {
        const {
            body: { id },
            user: { email },
        } = req;

        await friendsRepository.update(
            { id, responseUser: { email } },
            { status: true }
        );

        return { ok: true, data: null };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const refuse = async (req: any) => {
    try {
        const {
            query: { id },
            user: { email },
        } = req;

        await friendsRepository.delete({
            id,
            responseUser: { email },
        });

        return { ok: true, data: null };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const getIsFriend = async (req: any) => {
    try {
        const {
            query: { friendEmail },
            user: { email },
        } = req;

        const result = await friendsRepository.findOne({
            relations: { requestUser: true, responseUser: true },
            where: [
                {
                    requestUser: { email },
                    responseUser: { email: friendEmail },
                    status: true,
                },
                {
                    requestUser: { email: friendEmail },
                    responseUser: { email },
                    status: true,
                },
            ],
        });

        if (!result) return { ok: false, data: { isFriend: false } };
        return { ok: true, data: { isFriend: true } };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const findRequest = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;

        const list = await friendsRepository.find({
            relations: {
                requestUser: true,
                responseUser: true,
            },
            where: { requestUser: { email }, status: false },
            select: {
                id: true,
                responseUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
            },
            order: {
                createdAt: "desc",
            },
        });

        const result: any[] = [];
        if (list.length === 0)
            list.forEach((val: any) => {
                const { id, responseUser } = val;
                result.push({
                    id,
                    email: responseUser.email,
                    nickName: responseUser.nickName,
                    profileImage: responseUser.profileImage,
                });
            });

        return { ok: true, data: result };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const findResponse = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;

        const list = await friendsRepository.find({
            relations: {
                requestUser: true,
                responseUser: true,
            },
            where: { responseUser: { email }, status: false },
            select: {
                id: true,
                requestUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
            },
            order: {
                createdAt: "desc",
            },
        });

        const result: any[] = [];
        if (list.length === 0)
            list.forEach((val: any) => {
                const { id, requestUser } = val;
                result.push({
                    id,
                    email: requestUser.email,
                    nickName: requestUser.nickName,
                    profileImage: requestUser.profileImage,
                });
            });

        return { ok: true, data: result };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const findFriends = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;

        const friend1 = await friendsRepository.find({
            relations: { requestUser: true, responseUser: true },
            where: {
                status: true,
                requestUser: {
                    email,
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

export const findAllList = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;

        const request = await friendsRepository.find({
            relations: {
                requestUser: true,
                responseUser: true,
            },
            where: { requestUser: { email }, status: false },
            select: {
                id: true,
                responseUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
            },
            order: {
                createdAt: "desc",
            },
        });

        const requestList: any[] = [];
        if (request.length === 0)
            request.forEach((val: any) => {
                const { id, responseUser } = val;
                requestList.push({
                    id,
                    email: responseUser.email,
                    nickName: responseUser.nickName,
                    profileImage: responseUser.profileImage,
                });
            });

        const response = await friendsRepository.find({
            relations: {
                requestUser: true,
                responseUser: true,
            },
            where: { responseUser: { email }, status: false },
            select: {
                id: true,
                requestUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
            },
            order: {
                createdAt: "desc",
            },
        });

        const responseList: any[] = [];
        if (response.length === 0)
            response.forEach((val: any) => {
                const { id, requestUser } = val;
                responseList.push({
                    id,
                    email: requestUser.email,
                    nickName: requestUser.nickName,
                    profileImage: requestUser.profileImage,
                });
            });

        const friend1 = await friendsRepository.find({
            relations: { requestUser: true, responseUser: true },
            where: {
                status: true,
                requestUser: {
                    email,
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

        const friendsList: any[] = [...friend1, ...friend2];

        const result: any = {
            requestList,
            responseList,
            friendsList,
        };

        return { ok: true, data: result };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};
