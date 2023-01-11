import express from "express";
import { uploads } from "../config/multer";
import { routes } from "../config/route";
import { fileUpload, fileArrayUpload, remove } from "../services/image.service";

const router = express.Router();

router.post(routes.image.single, uploads.single("image"), async (req, res) => {
    try {
        const result = await fileUpload(req);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.image.array, uploads.array("images"), async (req, res) => {
    try {
        const result = await fileArrayUpload(req);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.delete(routes.image.remove, async (req, res) => {
    try {
        const result = await remove();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
