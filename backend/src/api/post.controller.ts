import express from "express";
import {
    find,
    save,
    setLike,
    modify,
    delete_post,
} from "../services/post.service";
import { postUpload } from "../config/multer";
import { fail, success, exist } from "../config/message";
import { routes } from "../config/route";

const router = express.Router();

//해당 게시글
router.get(routes.post.get, async (req, res) => {
    try {
        const { postId } = req.query;
        const post = await find(Number(postId));
        if (post !== null) {
            res.status(200).send(post);
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
router.put(routes.post.modify, postUpload.array("images"), async (req, res) => {
    try {
        if (await modify(req)) {
            res.status(200).send({ message: success.SAVE_POST });
        } else {
            res.status(404).send({ message: fail.SAVE_POST });
        }
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//게시글 삭제
router.delete(routes.post.delete, async (req, res) => {
    try {
        if (await delete_post(req)) {
            res.status(200).send({ message: success.DELETE_POST });
        } else {
            res.status(404).send({ message: fail.DELETE_POST });
        }
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//좋아요 버튼
router.post(routes.post.like, async (req, res) => {
    try {
        if (await setLike(req)) {
            res.status(200).send({ message: `${success.SAVE_LIKE}` });
        } else {
            res.status(404).send({ message: `${fail.SAVE_LIKE}` });
        }
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
