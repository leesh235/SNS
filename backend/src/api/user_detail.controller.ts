import express from "express";
import { routes } from "../config/route";
import {
    findAbility,
    findInfo,
    saveAbility,
    saveAddress,
    saveNumber,
    saveSchool,
    saveUniversity,
    deleteUserInfo,
} from "../services/user_detail.service";

const router = express.Router();

//경력 및 학력 불러오기
router.get(routes.user_detail.get_ability, async (req, res) => {
    try {
        res.status(200).send(await findAbility(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//연락처 및 기본 정보 불러오기
router.get(routes.user_detail.get_info, async (req, res) => {
    try {
        res.status(200).send(await findInfo(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//경력 설정
router.post(routes.user_detail.set_ability, async (req, res) => {
    try {
        res.status(200).send(await saveAbility(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//대학 설정
router.post(routes.user_detail.set_university, async (req, res) => {
    try {
        res.status(200).send(await saveUniversity(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//고등학교 설정
router.post(routes.user_detail.set_school, async (req, res) => {
    try {
        res.status(200).send(await saveSchool(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//전화번호 설정
router.post(routes.user_detail.set_number, async (req, res) => {
    try {
        res.status(200).send(await saveNumber(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//주소 설정
router.post(routes.user_detail.set_address, async (req, res) => {
    try {
        res.status(200).send(await saveAddress(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//직장 삭제
router.post(routes.user_detail.delete_ability, async (req, res) => {
    try {
        res.status(200).send(await deleteUserInfo(req, "ability"));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//대학 삭제
router.post(routes.user_detail.delete_university, async (req, res) => {
    try {
        res.status(200).send(await deleteUserInfo(req, "university"));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//고등학교 삭제
router.post(routes.user_detail.delete_school, async (req, res) => {
    try {
        res.status(200).send(await deleteUserInfo(req, "school"));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
