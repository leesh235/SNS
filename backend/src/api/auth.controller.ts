import express from "express";
import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { exist, incorrect } from "../config/message";
import passport from "passport";
import { generateAccessToken, generateRefreshToken } from "../utils/token";
import { hashPassword } from "../utils/password";
import { routes } from "../config/route";

const router = express.Router();
const userRepository = dataSource.getRepository(User);

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

        const users = await userRepository.findOne({
            where: { email: user.email },
        });

        if (users) {
            res.status(409).send({ message: `${exist.EXIST_ACCOUNT}` });
        }

        await userRepository.save(user);
        const accessToken = generateAccessToken(user.email);

        res.status(200).send({ accessToken });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
