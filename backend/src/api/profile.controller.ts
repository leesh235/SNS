import express from "express";
import { routes } from "../config/route";
import {
    saveCoverImage,
    saveProfileImage,
    saveIntroduce,
    getAllImage,
    getLatestImage,
    saveAbility,
    removeAbility,
    saveSchool,
    saveUniversity,
    removeSchool,
    removeUniversity,
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

//유저 프로필 ****************************삭제
router.get(routes.profile.login_info, async (req, res) => {
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

//프로필 직업 추가/수정
router.post(routes.profile.ability, async (req, res) => {
    try {
        const result = await saveAbility(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//프로필 직업 삭제
router.delete(routes.profile.ability, async (req, res) => {
    try {
        const result = await removeAbility(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//프로필 고등학교 관련 api
router.post(routes.profile.school, async (req, res) => {
    try {
        const result = await saveSchool(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

router.delete(routes.profile.school, async (req, res) => {
    try {
        const result = await removeSchool(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//프로필 대학교 관련 api
router.post(routes.profile.university, async (req, res) => {
    try {
        const result = await saveUniversity(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

router.delete(routes.profile.university, async (req, res) => {
    try {
        const result = await removeUniversity(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

export default router;
