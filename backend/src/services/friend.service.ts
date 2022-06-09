import { dataSource } from "../config/typeorm";
import { Friends } from "../entity/Friends.entity";

const friendsRepository = dataSource.getRepository(Friends);

export const request = async (req: any) => {
    try {
        const {
            body: { friend_email },
            user: { email },
        } = req;
        const friends = new Friends();
        friends.req_user = email;
        friends.res_user = friend_email;

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

        const result = await friendsRepository.update(
            { id, res_user: { email } },
            { status: true }
        );

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
            relations: { req_user: true, res_user: true },
            where: [{ req_user: { email } }, { res_user: { email } }],
        });

        if (!result) return false;

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

const modeFilter = (list: any, key: string) => {
    let result: any[] = [];
    list.forEach((val: any, idx: number) => {
        result.push({ id: val.id, user: val[key] });
    });
    return result;
};

export const findAll = async (
    req: any,
    mode: "friend" | "request" | "response"
) => {
    try {
        const {
            user: { email },
        } = req;

        let status = mode === "friend" ? true : false;

        const req_list = await friendsRepository.find({
            relations: {
                res_user: true,
            },
            where: { status, res_user: { email } },
            select: {
                id: true,
                res_user: { email: true, nickName: true, profileImage: true },
            },
            order: {
                createdAt: "desc",
            },
        });

        const res_list = await friendsRepository.find({
            relations: {
                req_user: true,
            },
            where: { status, req_user: { email } },
            select: {
                id: true,
                req_user: { email: true, nickName: true, profileImage: true },
            },
            order: {
                createdAt: "desc",
            },
        });

        let result: any[] = [];

        if (mode === "request") {
            return modeFilter(req_list, "res_user");
        } else if (mode === "response") {
            return modeFilter(res_list, "req_user");
        } else if (mode === "friend") {
            result = modeFilter(req_list, "res_user").concat(
                modeFilter(res_list, "req_user")
            );
            return result;
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }
};

export const findSimple = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;

        const req_list = await friendsRepository.find({
            relations: {
                res_user: true,
            },
            where: { status: false, res_user: { email } },
            select: {
                id: true,
                createdAt: true,
                res_user: { email: true, nickName: true, profileImage: true },
            },
            order: {
                createdAt: "desc",
            },
            take: 4,
        });

        const res_list = await friendsRepository.find({
            relations: {
                req_user: true,
            },
            where: { status: false, req_user: { email } },
            select: {
                id: true,
                createdAt: true,
                req_user: { email: true, nickName: true, profileImage: true },
            },
            order: {
                createdAt: "desc",
            },
            take: 4,
        });

        const req_frined = await friendsRepository.find({
            relations: {
                res_user: true,
            },
            where: { status: true, res_user: { email } },
            select: {
                id: true,
                updatedAt: true,
                res_user: { email: true, nickName: true, profileImage: true },
            },
            order: {
                updatedAt: "desc",
            },
            take: 2,
        });

        const res_frined = await friendsRepository.find({
            relations: {
                req_user: true,
            },
            where: { status: true, req_user: { email } },
            select: {
                id: true,
                updatedAt: true,
                req_user: { email: true, nickName: true, profileImage: true },
            },
            order: {
                updatedAt: "desc",
            },
            take: 2,
        });

        let result;

        result = {
            request: modeFilter(req_list, "res_user"),
            response: modeFilter(res_list, "req_user"),
            friends: modeFilter(req_frined, "res_user").concat(
                modeFilter(res_frined, "req_user")
            ),
        };

        return result;
    } catch (error) {
        console.log(error);
        return {};
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
            res_user: { email },
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
