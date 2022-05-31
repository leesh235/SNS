import express from "express";
import { routes } from "../config/routes";
import { getUser, saveUser } from "../services/user.service";

const router = express.Router();

router.post(routes.user.create, async (req, res) => {
    try {
        res.status(200).send({ ...(await saveUser(req)) });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.user.modify, async (req, res) => {
    try {
        res.status(200).send({ message: `success_create` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.user.delete, async (req, res) => {
    try {
        res.status(200).send({ message: `success_delete` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
