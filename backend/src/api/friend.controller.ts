import express from "express";
import { routes } from "../config/route";
import {
    follow,
    findAllList,
    findAllFollowing,
    findAllFollower,
} from "../services/friend.service";
import { existUser } from "../services/auth.service";
import { User } from "../entity/user.entity";

const router = express.Router();

//모든 목록
router.get(routes.friend.all, async (req, res) => {
    try {
        const result = await findAllList(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//팔로잉 목록
router.get(routes.friend.following, async (req, res) => {
    try {
        return res.status(200).send(await findAllFollowing(req));
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//팔로워 목록
router.get(routes.friend.follower, async (req, res) => {
    try {
        return res.status(200).send(await findAllFollower(req));
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//팔로우 하기/취소
router.post(routes.friend.follow, async (req, res) => {
    try {
        const user = new User();
        user.email = req.params.email;

        if (await existUser(user))
            return res.status(409).send("없는 유저입니다.");

        return res.status(200).send(await follow(req));
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

export default router;
