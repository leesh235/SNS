import express from "express";
import {
    findAll,
    findUserList,
    findMy,
    findLike,
    findBookmark,
} from "../services/posts.service";
import { routes } from "../config/route";

const router = express.Router();

//전체 리스트
router.get(routes.posts.all, async (req, res) => {
    try {
        const allList = await findAll(req);
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//내 게시글 리스트
router.get(routes.posts.my, async (req, res) => {
    try {
        const allList = await findMy(req);
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//좋아요 리스트
router.get(routes.posts.like, async (req, res) => {
    try {
        const allList = await findLike(req);
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//즐겨찾기 리스트
router.get(routes.posts.bookmark, async (req, res) => {
    try {
        const allList = await findBookmark(req);
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//유저 게시글 리스트
router.get(routes.posts.user, async (req, res) => {
    try {
        const allList = await findUserList(req);
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
