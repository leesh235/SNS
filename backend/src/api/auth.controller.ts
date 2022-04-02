import express from "express";
import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { Join, Login } from "../types/auth.type";
import { exist, incorrect } from "../config/message";
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
        const bodys: Login = req.body;

        const user = new User();
        user.email = bodys.email;
        user.password = bodys.password;

        const users = await userRepository.findOne({
            where: {
                deletedAt: undefined,
            },
        });

        if (!users) {
            res.status(403).send({ message: `${exist.NOT_EXIST_ACCOUNT}` });
        }

        if (users && !comparePassword(user.password, users.password)) {
            res.status(404).send({
                message: `${incorrect.INCORRECT_PASSWORD}`,
            });
        }

        res.status(200).send(generateToken(user.email));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.auth.join, async (req, res) => {
    try {
        const bodys: Join = req.body;

        const user = new User();
        user.email = bodys.email;
        user.password = hashPassword(bodys.password);
        user.birth = bodys.birth;
        user.gender = bodys.gender;
        user.nickName = bodys.nickName;

        const users = await userRepository.find();
        if (users) {
            res.status(409).send({ message: `${exist.EXIST_ACCOUNT}` });
        }

        if (bodys.password !== bodys.confirmPassword) {
            res.status(404).send({
                message: `${incorrect.INCORRECT_PASSWORD}`,
            });
        }

        await dataSource.manager.save(user);
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
