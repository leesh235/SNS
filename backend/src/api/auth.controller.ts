import express, { Request, Response } from "express";
import { User } from "../entity/User.entity";
import { exist } from "../config/message";
import passport from "passport";
import { hashPassword } from "../utils/password";
import { routes } from "../config/route";
import { existUser, save } from "../services/auth.service";
import jwtUtil from "../utils/jwtUtil";

const router = express.Router();

router.post(routes.auth.login, async (req: Request, res: Response) => {
    try {
        passport.authenticate("local", (error, user, info) => {
            if (error || !user) {
                res.status(400).send({ message: info.message });
                return;
            }
            req.login(user, { session: false }, (loginError) => {
                if (loginError) {
                    res.send(loginError);
                    return;
                }
                res.cookie("tokenId", user.tokenId, {
                    httpOnly: true,
                    maxAge: 7 * 24 * 60 * 60,
                });
                res.status(200).send({ accessToken: user.accessToken });
            });
        })(req, res);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.auth.join, async (req: Request, res: Response) => {
    try {
        const user = new User();
        user.email = req.body.email;
        user.password = await hashPassword(req.body.password);
        user.birth = req.body.birth;
        user.gender = req.body.gender;
        user.nickName = req.body.firstName + req.body.secondName;

        if (!existUser(user)) {
            res.status(409).send({ message: `${exist.EXIST_ACCOUNT}` });
        }

        res.status(200).send({ accessToken: await save(user) });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.get(routes.auth.refresh, async (req: Request, res: Response) => {
    try {
        if (req.headers.authorization && req.cookies.tokenId) {
            const accessDecoded = jwtUtil.verifyAccess(
                req.headers.authorization?.split("Bearer ")[1]
            );

            if (!accessDecoded.ok && accessDecoded.payload === "No authorized")
                res.status(401).send({ message: accessDecoded.payload });

            if (
                !accessDecoded.ok &&
                accessDecoded.payload === "invalid token"
            ) {
                const refreshDecoded = await jwtUtil.verifyRefresh(
                    req.cookies?.tokenId,
                    accessDecoded.payload.email
                );
                if (!refreshDecoded) {
                    res.clearCookie("tokenId");
                    res.status(401).send({ message: accessDecoded.payload });
                } else {
                    const newAccessToken = jwtUtil.access(
                        accessDecoded.payload.email,
                        accessDecoded.payload.nickName
                    );
                    res.status(200).send({ accessToken: newAccessToken });
                }
            }
        } else {
            res.status(400).send({
                message: "Access and refresh token are need",
            });
        }
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.auth.find, async (req: Request, res: Response) => {
    try {
        const user = new User();
        user.email = req.body.email;

        if (await existUser(user)) {
            res.status(409).send({ message: `${exist.NOT_EXIST_ACCOUNT}` });
        }

        res.status(200).send({ email: user.email });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.auth.code, async (req: Request, res: Response) => {
    try {
        const email = req.body.email;
        const codeNumber = req.body.codeNumber;

        console.log(email, codeNumber);

        res.status(200).send({ message: "인증번호 성공" });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.auth.modify, async (req: Request, res: Response) => {
    try {
        const user = new User();
        user.email = req.body.email;
        user.password = req.body.password;

        console.log(user);

        res.status(200).send({ message: "변경 성공" });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
