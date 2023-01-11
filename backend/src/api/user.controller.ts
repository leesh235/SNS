import express from "express";
import { routes } from "../config/route";
import {
    getProfile,
    getInfo,
    getPosts,
    getImages,
} from "../services/user.service";

const router = express.Router();

//유저 상세보기
router.get(routes.user.detail, async (req, res) => {
    try {
        const result = await getProfile(req);

        if (result.ok) return res.status(200).send(result.data);
        else return res.status(400).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//유저 정보 불러오기
router.get(routes.user.info, async (req, res) => {
    try {
        const result = await getInfo(req);

        if (result.ok) return res.status(200).send(result.data);
        else return res.status(400).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//유저 최신 이미지 불러오기
router.get(routes.user.images, async (req, res) => {
    try {
        const result = await getImages(req);

        if (result.ok) return res.status(200).send(result.data);
        else return res.status(400).send(result.data);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//유저 게시글 리스트
router.get(routes.user.posts, async (req, res) => {
    try {
        const result = await getPosts(req);

        if (result.ok) return res.status(200).send(result.data);
        else return res.status(400).send(result.data);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
