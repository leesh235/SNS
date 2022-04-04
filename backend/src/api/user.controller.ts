import express from "express";
import passport from "passport";
import { dataSource } from "../config/typeorm";
import { User } from "../entity/User.entity";
import { routes } from "../config/route";

const router = express.Router();
const userRepository = dataSource.getRepository(User);

router.get(
    routes.user.profile,
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            res.status(200).send(req.user);
        } catch (error) {
            res.status(500).send({ message: `${error}` });
        }
    }
);

router.post("/join", async (req, res) => {});

export default router;
