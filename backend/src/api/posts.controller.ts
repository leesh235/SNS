import express from "express";
import { findAll, user_posts, findDetails } from "../services/posts.service";
import { routes } from "../config/route";
import { PostMode } from "../config/enums";

const router = express.Router();

//전체 리스트
router.get(routes.posts.all_ist, async (req, res) => {
    try {
        const allList = await findDetails(req);
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//내 게시글 리스트
router.get(routes.posts.my_list, async (req, res) => {
    try {
        const allList = await findDetails(req, PostMode.MY);
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//좋아요 리스트
router.get(routes.posts.like_list, async (req, res) => {
    try {
        const allList = await findDetails(req, PostMode.LIKE);
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//즐겨찾기 리스트
router.get(routes.posts.bookmark_list, async (req, res) => {
    try {
        const allList = await findDetails(req, PostMode.BOOKMARK);
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//친구 게시글 리스트
router.get(routes.posts.friends_list, async (req, res) => {
    try {
        const allList = await findDetails(req, PostMode.FRIENDS);
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//게시글 디테일 리스트
router.get(routes.posts.ids, async (req, res) => {
    try {
        const allList = await findAll(req);
        res.status(200).send(allList);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: `${error}` });
    }
});

//유저 게시글 리스트
router.get(routes.posts.user_list, async (req, res) => {
    try {
        const allList = await user_posts(req);
        res.status(200).send(allList);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
