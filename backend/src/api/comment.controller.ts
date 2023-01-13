import express from "express";
import { routes } from "../config/route";
import { findAll, save, modify, remove } from "../services/comment.service";

const router = express.Router();

//해당 게시글
router.get(routes.comment.get, async (req, res) => {
    try {
        const result = await findAll(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//댓글 작성
router.post(routes.comment.write, async (req, res) => {
    try {
        const result = await save(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//댓글 수정
router.patch(routes.comment.modify, async (req, res) => {
    try {
        const result = await modify(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//댓글 삭제
router.delete(routes.comment.delete, async (req, res) => {
    try {
        const result = await remove(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
