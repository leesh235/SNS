import express from "express";
import { routes } from "../config/routes";
import { findChatList } from "../services/chat.service";

const router = express.Router();

router.get(routes.message.message_list, async (req, res) => {
    try {
        res.status(200).send(await findChatList(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.message.create, async (req, res) => {
    try {
        res.status(200).send({ message: `success_create_message` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.message.delete, async (req, res) => {
    try {
        res.status(200).send({ message: `success_delete_message` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
