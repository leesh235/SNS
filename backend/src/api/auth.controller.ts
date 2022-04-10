import express from "express";
import { User } from "../entity/User.entity";
import { exist } from "../config/message";
import passport from "passport";
import { hashPassword } from "../utils/password";
import { routes } from "../config/route";
import { existUser, save } from "../services/auth.service";

const router = express.Router();

router.post(routes.auth.login, async (req, res) => {
    try {
        const user = new User();
        user.email = req.body.email;
        user.password = req.body.password;

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
                res.status(200).send({ ...user });
            });
        })(req, res);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.auth.join, async (req, res) => {
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

        res.status(200).send({ accessToken: save(user) });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
