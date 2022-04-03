import express from "express";
import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { exist, incorrect } from "../config/message";
import passport from "passport";
import {
    hashPassword,
    generateToken,
    comparePassword,
} from "../services/auth.service";
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
                const token = generateToken(user.email);
                res.status(200).send({ token });
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
        user.nickName = req.body.nickName;

        const users = await userRepository.find();
        if (users) {
            res.status(409).send({ message: `${exist.EXIST_ACCOUNT}` });
        }

        if (req.body.password !== req.body.confirmPassword) {
            res.status(404).send({
                message: `${incorrect.INCORRECT_PASSWORD}`,
            });
        }
        const result = await userRepository.save(user);

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
