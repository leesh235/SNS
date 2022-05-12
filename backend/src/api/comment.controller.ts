import express from "express";
import { routes } from "../config/route";
import {
    findAll,
    save,
    modify,
    delete_comment,
} from "../services/comment.service";

const router = express.Router();

//해당 게시글
router.get(routes.comment.get, async (req, res) => {
    try {
        res.status(200).send(await findAll(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//댓글 작성
router.post(routes.comment.write, async (req, res) => {
    try {
        res.status(200).send(await save(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//댓글 수정
router.put(routes.comment.modify, async (req, res) => {
    try {
        res.status(200).send(await modify(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//댓글 삭제
router.delete(routes.comment.delete, async (req, res) => {
    try {
        res.status(200).send(await delete_comment(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//좋아요 버튼
router.post(routes.comment.like, async (req, res) => {
    try {
        res.status(200).send({ message: "comment_like" });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
