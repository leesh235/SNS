import express from "express";
import { routes } from "../config/route";
import { upload } from "../config/multer";
import {
    save_image,
    save_introduce,
    getUserImage,
    getLatestImage,
    getPeople,
    getAllImages,
    user_detail,
} from "../services/user.service";

const router = express.Router();

//유저 프로필
router.get(routes.user.profile, async (req, res) => {
    try {
        res.status(200).send({ ...(await user_detail(req)) });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//유저 프로필
router.get(routes.user.login_info, async (req, res) => {
    try {
        res.status(200).send(req.user);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//커버 사진 or 프로필 사진 등록
router.post(
    routes.user.set_image,
    upload.single("streamfile"),
    async (req, res) => {
        try {
            if (await save_image(req)) {
                res.status(200).send({ ...(await getUserImage(req)) });
            } else {
                res.status(409).send({ message: `이미지 저장 성공` });
            }
        } catch (error) {
            res.status(500).send({ message: `${error}` });
        }
    }
);

//자기 소개글 작성
router.post(routes.user.set_introduce, async (req, res) => {
    try {
        if (await save_introduce(req)) {
            res.status(200).send({ introduction: req.body.introduce });
        } else {
            res.status(409).send({ message: `자기소개 저장 성공` });
        }
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//모든 이미지 목록
router.get(routes.user.all_image, async (req, res) => {
    try {
        res.status(200).send(await getAllImages(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//최근 이미지 목록
router.get(routes.user.latest_image, async (req, res) => {
    try {
        res.status(200).send(await getLatestImage(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//사람 검색 목록 or 모든 사람 목록
router.get(routes.user.people, async (req, res) => {
    try {
        res.status(200).send(await getPeople(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
