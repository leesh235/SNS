import express from "express";
import { routes } from "../config/route";
import {
    request,
    response,
    findAll,
    refuse,
    findAllList,
    get_is_friend,
    findRequest,
} from "../services/friend.service";

const router = express.Router();

//친구 요청
router.post(routes.friend.request, async (req, res) => {
    try {
        res.status(200).send(await request(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//친구 응답
router.post(routes.friend.response, async (req, res) => {
    try {
        res.status(200).send(await response(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//친구 여부
router.get(routes.friend.is_friend, async (req, res) => {
    try {
        res.status(200).send(await get_is_friend(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//친구 거절
router.post(routes.friend.refuse, async (req, res) => {
    try {
        res.status(200).send(await refuse(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//친구 요청 리스트
router.get(routes.friend.request_list, async (req, res) => {
    try {
        res.status(200).send(await findRequest(req, "request"));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//친구 응답 리스트
router.get(routes.friend.response_list, async (req, res) => {
    try {
        res.status(200).send(await findRequest(req, "response"));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//친구 목록
router.get(routes.friend.friend_list, async (req, res) => {
    try {
        res.status(200).send(await findAll(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//친구 home 목록
router.get(routes.friend.all, async (req, res) => {
    try {
        res.status(200).send(await findAllList(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
