import express from "express";
import { routes } from "../config/route";
import {
    saveCoverImage,
    saveProfileImage,
    saveIntroduce,
    saveAbility,
    removeAbility,
    saveSchool,
    saveUniversity,
    removeSchool,
    removeUniversity,
} from "../services/profile.service";

const router = express.Router();

//유저 프로필
router.get(routes.user.profile, async (req, res) => {
    try {
        res.status(200).send(req.user);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//유저 프로필 ****************************삭제
router.get(routes.user.login_info, async (req, res) => {
    try {
        res.status(200).send(req.user);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//커버 사진 등록
router.post(routes.user.coverimage, async (req, res) => {
    try {
        res.status(200).send(await saveCoverImage(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//프로필 사진 등록
router.post(routes.user.profileimage, async (req, res) => {
    try {
        res.status(200).send(await saveProfileImage(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//프로필 정보 변경(소개글, 폰넘버)
router.patch(routes.user.introduce, async (req, res) => {
    try {
        res.status(200).send(await saveIntroduce(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//프로필 직업 추가/수정
router.post(routes.user.ability, async (req, res) => {
    try {
        res.status(200).send(await saveAbility(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//프로필 직업 삭제
router.delete(routes.user.ability, async (req, res) => {
    try {
        res.status(200).send(await removeAbility(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//프로필 고등학교 관련 api
router.post(routes.user.school, async (req, res) => {
    try {
        res.status(200).send(await saveSchool(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.patch(routes.user.school, async (req, res) => {
    try {
        res.status(200).send(await removeSchool(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.delete(routes.user.school, async (req, res) => {
    try {
        res.status(200).send();
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//프로필 대학교 관련 api
router.post(routes.user.university, async (req, res) => {
    try {
        res.status(200).send(await saveUniversity(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.delete(routes.user.university, async (req, res) => {
    try {
        res.status(200).send(await removeUniversity(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
