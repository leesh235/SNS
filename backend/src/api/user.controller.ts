import express from "express";
import { routes } from "../config/route";
import { upload } from "../config/multer";
import { fail, success } from "../config/message";
import {
    save_image,
    save_introduce,
    getUserImage,
    getLatestImage,
    getFriendList,
    getPeople,
    getAllImages,
} from "../services/user.service";

const router = express.Router();

//유저 프로필
router.get(routes.user.profile, async (req, res) => {
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
                res.status(409).send({ message: `${fail.SAVE_IMAGE}` });
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
            res.status(409).send({ message: `${fail.SAVE_INTRODUCE}` });
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

//친구 목록
router.get(routes.user.friends, async (req, res) => {
    try {
        res.status(200).send(await getFriendList(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//친구 요청
router.post(routes.user.req_friend, async (req, res) => {
    try {
        res.status(200).send();
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//친구 요청 리스트
router.get(routes.user.await_friend, async (req, res) => {
    try {
        res.status(200).send(await getFriendList(req, "await"));
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
