import express from "express";
import { find, save, setLike, modify, remove } from "../services/post.service";
import { postUpload } from "../config/multer";
import { routes } from "../config/route";

const router = express.Router();

//해당 게시글
router.get(routes.post.get, async (req, res) => {
    try {
        const post = await find(req);
        if (post !== null) {
            res.status(200).send(post);
        } else {
            res.status(404).send({ message: `존재하지 않으 게시글입니다.` });
        }
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//게시글 작성
router.post(routes.post.set, postUpload.array("images"), async (req, res) => {
    try {
        res.status(200).send(await save(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//게시글 수정
router.put(routes.post.modify, postUpload.array("images"), async (req, res) => {
    try {
        console.log(req.files);
        res.status(200).send(await modify(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//게시글 삭제
router.delete(routes.post.delete, async (req, res) => {
    try {
        res.status(200).send(await remove(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//좋아요 버튼
router.post(routes.post.like, async (req, res) => {
    try {
        const result = await setLike(req);
        res.status(200).send({ ...result });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
