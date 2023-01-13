import express from "express";
import { routes } from "../config/route";
import {
    saveAbility,
    removeAbility,
    saveSchool,
    saveUniversity,
    removeSchool,
    removeUniversity,
} from "../services/information.service";

const router = express.Router();

//프로필 직업 추가/수정
router.post(routes.information.ability, async (req, res) => {
    try {
        const result = await saveAbility(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//프로필 직업 삭제
router.delete(routes.information.ability, async (req, res) => {
    try {
        const result = await removeAbility(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//프로필 고등학교 관련 api
router.post(routes.information.school, async (req, res) => {
    try {
        const result = await saveSchool(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

router.delete(routes.information.school, async (req, res) => {
    try {
        const result = await removeSchool(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//프로필 대학교 관련 api
router.post(routes.information.university, async (req, res) => {
    try {
        const result = await saveUniversity(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

router.delete(routes.information.university, async (req, res) => {
    try {
        const result = await removeUniversity(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

export default router;
