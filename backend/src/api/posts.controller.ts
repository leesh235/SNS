import express from "express";
import { findAll } from "../services/posts.service";
import { Post } from "../entity/Post.entity";
import { fail, success, exist } from "../config/message";
import { routes } from "../config/route";

const router = express.Router();

//전체 리스트
router.get(routes.posts.all_ist, async (req, res) => {
    try {
        const allList = await findAll();
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//내 게시글 리스트
router.get(routes.posts.my_list, async (req, res) => {
    try {
        res.status(200).send({ message: `` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//좋아요 리스트
router.get(routes.posts.like_list, async (req, res) => {
    try {
        res.status(200).send({ message: `` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//즐겨찾기 리스트
router.get(routes.posts.bookmark_list, async (req, res) => {
    try {
        res.status(200).send({ message: `` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//친구 게시글 리스트
router.get(routes.posts.friends_list, async (req, res) => {
    try {
        res.status(200).send({ message: `` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
