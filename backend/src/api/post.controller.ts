import express from "express";
import { find } from "../services/post.service";
import { Post } from "../entity/Post.entity";
import { postUpload } from "../config/multer";
import { fail, success, exist } from "../config/message";

const router = express.Router();

//해당 게시글
router.get("/:postId", async (req, res) => {
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
router.post("/write", postUpload.array("streafiles", 20), async (req, res) => {
    try {
        const post = new Post();

        res.status(200).send({ message: `` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//게시글 수정
router.patch("/modify", async (req, res) => {
    try {
        res.status(200).send({ message: `` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//게시글 삭제
router.delete("/delete", async (req, res) => {
    try {
        res.status(200).send({ message: `` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//좋아요 버튼
router.post("/like", async (req, res) => {
    try {
        res.status(200).send({ message: `` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
