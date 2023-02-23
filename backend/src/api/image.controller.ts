import express from "express";
import { uploads } from "../config/multer";
import { routes } from "../config/route";
import { fileUpload, fileArrayUpload, remove } from "../services/image.service";

const router = express.Router();

//단일 이미지 업로드
router.post(routes.image.single, uploads.single("image"), async (req, res) => {
    try {
        const result = await fileUpload(req);
        if (result) res.status(200).send(result);
        else res.status(500).send(result);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//여러 이미지 업로드
router.post(routes.image.array, uploads.array("images"), async (req, res) => {
    try {
        const result = await fileArrayUpload(req);
        if (result) res.status(200).send(result);
        else res.status(500).send(result);
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
