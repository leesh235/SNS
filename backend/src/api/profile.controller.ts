import express, { Request, Response } from "express";
import { routes } from "../config/route";
import {
    saveCoverImage,
    saveProfileImage,
    saveIntroduce,
    getAllImage,
    getLatestImage,
    findUser,
} from "../services/profile.service";
import { validateUtil } from "../utils/dtoValidate";
import { EmaileReqDto } from "../dto/common/email.dto";
import { AllImgReqDto } from "../dto/profile.dto";

const router = express.Router();

//유저 프로필
router.get(routes.profile.profile, async (req: Request, res: Response) => {
    try {
        const emailReqDto = new EmaileReqDto(req.params.email);
        validateUtil(emailReqDto);
        const result = await findUser(emailReqDto);

        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

router.get(routes.profile.simple, async (req: Request, res: Response) => {
    try {
        return res.status(200).send(req.user);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//커버 사진 등록
router.post(routes.profile.coverimage, async (req: Request, res: Response) => {
    try {
        const result = await saveCoverImage(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//프로필 사진 등록
router.post(
    routes.profile.profileimage,
    async (req: Request, res: Response) => {
        try {
            const result = await saveProfileImage(req);

            if (result.ok) return res.status(200).send(result.data);
            return res.status(500).send(result.data);
        } catch (error) {
            return res.status(500).send({ message: `${error}` });
        }
    }
);

//프로필 정보 변경(소개글, 폰넘버)
router.patch(routes.profile.introduce, async (req: Request, res: Response) => {
    try {
        const result = await saveIntroduce(req);

        if (result.ok) return res.status(200).send(result.data);
        return res.status(500).send(result.data);
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//모든 이미지 목록
router.get(routes.profile.all, async (req: Request, res: Response) => {
    try {
        const allImgReqDto = new AllImgReqDto(
            req.params.email,
            req.query.take ? +req.query.take : 6
        );

        validateUtil(allImgReqDto);
        return res.status(200).send(await getAllImage(allImgReqDto));
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

//최근 이미지 목록
router.get(routes.profile.latest, async (req: Request, res: Response) => {
    try {
        const emailReqDto = new EmaileReqDto(req.params.email);
        validateUtil(emailReqDto);

        return res.status(200).send(await getLatestImage(emailReqDto));
    } catch (error) {
        return res.status(500).send({ message: `${error}` });
    }
});

export default router;
