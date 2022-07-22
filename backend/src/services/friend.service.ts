import { In, Not, Like } from "typeorm";
import { dataSource } from "../config/typeorm";
import { Friends } from "../entity/Friends.entity";
import { Request_friend } from "../entity/Request_friend";

const requestFriendsRepository = dataSource.getRepository(Request_friend);
const friendsRepository = dataSource.getRepository(Friends);

export const request = async (req: any) => {
    try {
        const {
            body: { friend_email },
            user: { email },
        } = req;

        const exist = await friendsRepository.findOne({
            relations: {
                userOne: true,
                userTwo: true,
            },
            where: [
                { userOne: { email: friend_email } },
                { userTwo: { email: friend_email } },
            ],
        });

        if (exist) return false;

        const friends = new Request_friend();
        friends.fromUser = email;
        friends.toUser = friend_email;

        await requestFriendsRepository.save(friends);

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

        const request: any = await requestFriendsRepository.findOne({
            relations: { toUser: true, fromUser: true },
            where: { id },
            select: {
                id: true,
                toUser: { email: true },
                fromUser: { email: true },
            },
        });

        const friend = new Friends();
        friend.userOne = request?.fromUser.email;
        friend.userTwo = email;

        await friendsRepository.save(friend);

        await requestFriendsRepository.delete({
            id,
            toUser: { email },
        });

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

        await requestFriendsRepository.delete({
            id,
            toUser: { email },
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
            relations: { userOne: true, userTwo: true },
            where: [{ userOne: { email } }, { userTwo: { email } }],
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
            relations: { userOne: true, userTwo: true },
            where: [
                {
                    userOne: { email },
                    userTwo: {
                        email: Not(In(NotIn)),
                        nickName: Like(`%${search}%`),
                    },
                },
                {
                    userTwo: { email },
                    userOne: {
                        email: Not(In(NotIn)),
                        nickName: Like(`%${search}%`),
                    },
                },
            ],
            select: {
                id: true,
                createdAt: true,
                userOne: { email: true, nickName: true, profileImage: true },
                userTwo: { email: true, nickName: true, profileImage: true },
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

        const list = await requestFriendsRepository.find({
            relations: {
                toUser: true,
                fromUser: true,
            },
            where: [{ fromUser: { email } }, { toUser: { email } }],
            select: {
                id: true,
                fromUser: { email: true, nickName: true, profileImage: true },
                toUser: { email: true, nickName: true, profileImage: true },
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

        const list = await requestFriendsRepository.find({
            relations: {
                toUser: true,
                fromUser: true,
            },
            where: [{ toUser: { email } }, { fromUser: { email } }],
            select: {
                id: true,
                createdAt: true,
                toUser: { email: true, nickName: true, profileImage: true },
                fromUser: { email: true, nickName: true, profileImage: true },
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
            relations: { userOne: true, userTwo: true },
            where: [{ userOne: { email } }, { userTwo: { email } }],
            select: {
                id: true,
                createdAt: true,
                userOne: { email: true, nickName: true, profileImage: true },
                userTwo: { email: true, nickName: true, profileImage: true },
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
