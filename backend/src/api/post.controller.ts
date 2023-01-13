import express from "express";
import { find, save, setLike, modify, remove } from "../services/post.service";
import { routes } from "../config/route";

const router = express.Router();

//해당 게시글
router.get(routes.post.get, async (req, res) => {
    try {
        const result = await find(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//게시글 작성
router.post(routes.post.write, async (req, res) => {
    try {
        const result = await save(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//게시글 수정
router.patch(routes.post.modify, async (req, res) => {
    try {
        const result = await modify(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//게시글 삭제
router.delete(routes.post.remove, async (req, res) => {
    try {
        const result = await remove(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//좋아요 버튼
router.post(routes.post.like, async (req, res) => {
    try {
        const result = await setLike(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
