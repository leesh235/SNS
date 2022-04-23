import express from "express";
import { routes } from "../config/route";
import { upload } from "../config/multer";
import { fail, success } from "../config/message";
import {
    save_image,
    save_introduce,
    getUserImage,
    getImages,
} from "../services/user.service";

const router = express.Router();

router.get(routes.user.profile, async (req, res) => {
    try {
        res.status(200).send(req.user);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(
    routes.user.set_image,
    upload.single("streamfile"),
    async (req, res) => {
        try {
            if (await save_image(req)) {
                res.status(200).send({ ...(await getUserImage(req)) });
            } else {
                res.status(409).send({ message: `${fail.SAVE_IMAGE}` });
            }
        } catch (error) {
            res.status(500).send({ message: `${error}` });
        }
    }
);

router.post(routes.user.set_introduce, async (req, res) => {
    try {
        if (await save_introduce(req)) {
            res.status(200).send({ introduction: req.body.introduce });
        } else {
            res.status(409).send({ message: `${fail.SAVE_INTRODUCE}` });
        }
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.get(routes.user.images, async (req, res) => {
    try {
        res.status(200).send(getImages(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.get(routes.user.friends, async (req, res) => {
    try {
        res.status(200).send({ message: "" });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
