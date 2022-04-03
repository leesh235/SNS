import express from "express";
import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { routes } from "../config/route";
import { isAuthenticated } from "../services/auth.service";

const router = express.Router();
const userRepository = dataSource.getRepository(User);

router.get(routes.user.profile, async (req, res) => {
    try {
        if (isAuthenticated(req)) {
            const user = new User();
            user.email = req.body.email;

            const users = await userRepository.findOne({
                where: [
                    {
                        email: req.body.email,
                    },
                    {
                        deletedAt: undefined,
                    },
                ],
            });

            res.status(200).send(users);
        }
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post("/join", async (req, res) => {});

export default router;
