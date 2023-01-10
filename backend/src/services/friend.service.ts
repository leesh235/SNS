import { In, Not, Like } from "typeorm";
import { dataSource } from "../config/typeorm";
import { Friends } from "../entity/friends.entity";

const friendsRepository = dataSource.getRepository(Friends);

export const request = async (req: any) => {
    try {
        const {
            body: { friend_email },
            user: { email },
        } = req;

        const exist = await friendsRepository.findOne({
            relations: {
                requestUser: true,
                responseUser: true,
            },
            where: [
                { requestUser: { email: friend_email } },
                { responseUser: { email: friend_email } },
            ],
        });

        if (exist) return false;

        const friends = new Friends();
        friends.requestUser = email;
        friends.responseUser = friend_email;

        await friendsRepository.save(friends);

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const response = async (req: any) => {
    try {
        const {
            body: { id },
            user: { email },
        } = req;

        const request: any = await friendsRepository.findOne({
            where: { id },
            select: {
                status: true,
            },
        });

        if (request.status) false;

        await friendsRepository.update({ id }, { status: true });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const refuse = async (req: any) => {
    try {
        const {
            body: { id },
            user: { email },
        } = req;

        await friendsRepository.delete({
            id,
            responseUser: { email },
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const get_is_friend = async (req: any) => {
    try {
        const {
            query: { email },
        } = req;

        const result = await friendsRepository.findOne({
            relations: { requestUser: true, responseUser: true },
            where: [{ requestUser: { email } }, { responseUser: { email } }],
        });

        if (!result) return false;

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const findAll = async (req: any) => {
    try {
        const {
            query: { select, search },
            user: { email },
        } = req;

        let NotIn: any[] = [];
        if (select !== undefined) NotIn = select;

        const friendList = await friendsRepository.find({
            relations: { requestUser: true, responseUser: true },
            where: [
                {
                    requestUser: { email },
                    responseUser: {
                        email: Not(In(NotIn)),
                        nickName: Like(`%${search}%`),
                    },
                },
                {
                    responseUser: { email },
                    requestUser: {
                        email: Not(In(NotIn)),
                        nickName: Like(`%${search}%`),
                    },
                },
            ],
            select: {
                id: true,
                createdAt: true,
                requestUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
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

        let result: any[] = [];

        friendList.map((val: any) => {
            const { id, userOne, userTwo } = val;
            const userEmail =
                userOne.email === email ? userTwo.email : userOne.email;
            const userNickName =
                userOne.email === email ? userTwo.nickName : userOne.nickName;
            const userProfileImage =
                userOne.email === email
                    ? userTwo.profileImage
                    : userOne.profileImage;
            result.push({
                id,
                email: userEmail,
                nickName: userNickName,
                profileImage: userProfileImage,
            });
        });

        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const findRequest = async (req: any, mode: "request" | "response") => {
    try {
        const {
            user: { email },
        } = req;

        const list = await friendsRepository.find({
            relations: {
                requestUser: true,
                responseUser: true,
            },
            where: [{ responseUser: { email } }, { requestUser: { email } }],
            select: {
                id: true,
                responseUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
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

        let result: any[] = [];

        list.forEach((val: any) => {
            const { id, fromUser, toUser } = val;
            const user = mode === "request" ? fromUser : toUser;
            result.push({
                id,
                email: user.email,
                nickName: user.nickName,
                profileImage: user.profileImage,
            });
        });

        return result;
    } catch (error) {
        return [];
    }
};

export const findAllList = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;

        const list = await friendsRepository.find({
            relations: {
                requestUser: true,
                responseUser: true,
            },
            where: [{ requestUser: { email } }, { responseUser: { email } }],
            select: {
                id: true,
                createdAt: true,
                requestUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
                responseUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
            },
            order: {
                createdAt: "desc",
            },
            take: 4,
        });

        let requestList: any[] = [];
        let responseList: any[] = [];

        list.forEach((val: any) => {
            const { id, fromUser, toUser } = val;
            if (fromUser.email === email)
                requestList.push({
                    id,
                    email: fromUser.email,
                    nickName: fromUser.nickName,
                    profileImage: fromUser.profileImage,
                });
            else
                responseList.push({
                    id,
                    email: toUser.email,
                    nickName: toUser.nickName,
                    profileImage: toUser.profileImage,
                });
        });

        const friendList = await friendsRepository.find({
            relations: { requestUser: true, responseUser: true },
            where: [{ requestUser: { email } }, { responseUser: { email } }],
            select: {
                id: true,
                createdAt: true,
                requestUser: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
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

        let friends: any[] = [];

        friendList.forEach((val: any) => {
            const { id, userOne, userTwo } = val;
            const userEmail =
                userOne.email === email ? userTwo.email : userOne.email;
            const userNickName =
                userOne.email === email ? userTwo.nickName : userOne.nickName;
            const userProfileImage =
                userOne.email === email
                    ? userTwo.profileImage
                    : userOne.profileImage;
            friends.push({
                id,
                email: userEmail,
                nickName: userNickName,
                profileImage: userProfileImage,
            });
        });

        let result = {
            requestList,
            responseList,
            friends,
        };

        return result;
    } catch (error) {
        console.log(error);
        return {};
    }
};
