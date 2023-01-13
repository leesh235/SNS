import express from "express";
import {
    findAll,
    findPosts,
    findPeople,
    findFriends,
} from "../services/search.service";
import { routes } from "../config/route";

const router = express.Router();

//모두 검색
router.get(routes.search.all, async (req, res) => {
    try {
        const result = await findAll(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//게시글 검색
router.get(routes.search.post, async (req, res) => {
    try {
        const result = await findPosts(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//사람 검색
router.get(routes.search.people, async (req, res) => {
    try {
        const result = await findPeople(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//친구 검색
router.get(routes.search.friend, async (req, res) => {
    try {
        const result = await findFriends(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

export default router;
