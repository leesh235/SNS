import express from "express";
import { find, save } from "../services/post.service";
import { Post } from "../entity/Post.entity";
import { postUpload } from "../config/multer";
import { fail, success, exist } from "../config/message";
import { routes } from "../config/route";
import { findUser } from "../services/user.service";

const router = express.Router();

//해당 게시글
router.get(routes.post.get, async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await find(Number(postId));
        if (post !== null) {
            res.status(200).send({ ...post });
        } else {
            res.status(404).send({ message: `${exist.NOT_EXIST_POST}` });
        }
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//게시글 작성
router.post(routes.post.write, postUpload.array("images"), async (req, res) => {
    try {
        if (await save(req)) {
            res.status(200).send({ message: success.SAVE_POST });
        } else {
            res.status(409).send({ message: fail.SAVE_POST });
        }
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//게시글 수정
router.patch(routes.post.modify, async (req, res) => {
    try {
        res.status(200).send({ message: `` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//게시글 삭제
router.delete(routes.post.delete, async (req, res) => {
    try {
        res.status(200).send({ message: `` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//좋아요 버튼
router.post(routes.post.like, async (req, res) => {
    try {
        res.status(200).send({ message: `` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
