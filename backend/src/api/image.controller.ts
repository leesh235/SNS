import express from "express";
import { uploads } from "../config/multer";
import { routes } from "../config/route";
import {
    fileUpload,
    fileArrayUpload,
    getLatestImage,
    getAllImage,
    remove,
} from "../services/image.service";

const router = express.Router();

//단일 이미지 업로드
router.post(routes.image.single, uploads.single("image"), async (req, res) => {
    try {
        const result = await fileUpload(req);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//여러 이미지 업로드
router.post(routes.image.array, uploads.array("images"), async (req, res) => {
    try {
        const result = await fileArrayUpload(req);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//모든 이미지 목록
router.get(routes.image.all, async (req, res) => {
    try {
        res.status(200).send(await getAllImage(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//최근 이미지 목록
router.get(routes.image.latest, async (req, res) => {
    try {
        res.status(200).send(await getLatestImage(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//주인없는 이미지 삭제
router.delete(routes.image.remove, async (req, res) => {
    try {
        const result = await remove(req);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
