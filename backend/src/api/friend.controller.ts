import express from "express";
import { routes } from "../config/route";
import {
    request,
    response,
    findFriends,
    refuse,
    findAllList,
    getIsFriend,
    findRequest,
    findResponse,
} from "../services/friend.service";

const router = express.Router();

//친구 요청
router.post(routes.friend.request, async (req, res) => {
    try {
        const result = await request(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//친구 응답
router.post(routes.friend.response, async (req, res) => {
    try {
        const result = await response(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//친구 여부
router.get(routes.friend.isFriend, async (req, res) => {
    try {
        const result = await getIsFriend(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//친구 거절
router.delete(routes.friend.refuse, async (req, res) => {
    try {
        const result = await refuse(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//친구 요청 리스트
router.get(routes.friend.requestList, async (req, res) => {
    try {
        const result = await findRequest(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//친구 응답 리스트
router.get(routes.friend.responseList, async (req, res) => {
    try {
        const result = await findResponse(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//친구 목록
router.get(routes.friend.friendList, async (req, res) => {
    try {
        const result = await findFriends(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//친구 home 목록
router.get(routes.friend.all, async (req, res) => {
    try {
        const result = await findAllList(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

export default router;
