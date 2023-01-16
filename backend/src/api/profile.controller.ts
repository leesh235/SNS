import express from "express";
import { routes } from "../config/route";
import {
    saveCoverImage,
    saveProfileImage,
    saveIntroduce,
    getAllImage,
    getLatestImage,
} from "../services/profile.service";

const router = express.Router();

//유저 프로필
router.get(routes.profile.profile, async (req, res) => {
    try {
        return res.status(200).send(req.user);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

router.get(routes.profile.simple, async (req, res) => {
    try {
        return res.status(200).send(req.user);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//커버 사진 등록
router.post(routes.profile.coverimage, async (req, res) => {
    try {
        const result = await saveCoverImage(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//프로필 사진 등록
router.post(routes.profile.profileimage, async (req, res) => {
    try {
        const result = await saveProfileImage(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//프로필 정보 변경(소개글, 폰넘버)
router.patch(routes.profile.introduce, async (req, res) => {
    try {
        const result = await saveIntroduce(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//모든 이미지 목록
router.get(routes.profile.all, async (req, res) => {
    try {
        res.status(200).send(await getAllImage(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//최근 이미지 목록
router.get(routes.profile.latest, async (req, res) => {
    try {
        res.status(200).send(await getLatestImage(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
