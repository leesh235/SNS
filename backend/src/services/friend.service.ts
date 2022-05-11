import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { Friends } from "../entity/Friends.entity";
import { FileUrl } from "../entity/file_url.entity";
import { getFilePath } from "../utils/fileFunction";
import { IsNull, Like, Not } from "typeorm";

const userRepository = dataSource.getRepository(User);
const friendsRepository = dataSource.getRepository(Friends);
const fileRepository = dataSource.getRepository(FileUrl);

export const exist = async (req: any) => {
    try {
        const {
            body: { friend_email },
            user: { email },
        } = req;

        const result = await friendsRepository.find({
            where: [
                { userOne: email, userTwo: friend_email },
                { userOne: friend_email, userTwo: email },
            ],
        });

        if (result) return false;
        else return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const request = async (req: any) => {
    try {
        const {
            body: { friend_email },
            user: { email },
        } = req;
        const friends = new Friends();
        friends.userOne = email;
        friends.userTwo = friend_email;

        if (await exist(req)) {
            const result = await friendsRepository.save(friends);
            console.log(result);

            return true;
        } else return false;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const response = async (req: any) => {
    try {
        const {
            body: { friend_email },
            user: { email },
        } = req;

        const result = await friendsRepository.update(
            { userOne: friend_email, userTwo: email },
            { status: true }
        );
        console.log(result);

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const findAll = async (
    req: any,
    mode: "all" | "request" | "response"
) => {
    try {
        const {
            user: { email },
        } = req;

        let where;
        if (mode === "all")
            where = [
                { status: true, userOne: email },
                { status: true, userTwo: email },
            ];
        else if (mode === "request") where = { status: false, userOne: email };
        else if (mode === "response") where = { status: false, userTwo: email };

        const result = await friendsRepository.find({
            where,
        });
        console.log(result);

        return result;
    } catch (error) {
        return [];
    }
};
