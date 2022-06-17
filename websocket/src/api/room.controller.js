import express from "express";
import { routes } from "../config/routes";
import {
    findRoom,
    findRoomList,
    createRoom,
    deleteRoom,
    modifyRoom,
    createGroupRoom,
} from "../services/room.service";
import { getRooms } from "../services/user_room.service";

const router = express.Router();

router.get(routes.room.room, async (req, res) => {
    try {
        await findRoom(req);
        res.status(200).send({ message: `success_room` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.get(routes.room.room_list, async (req, res) => {
    try {
        res.status(200).send(await getRooms(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.room.create_group, async (req, res) => {
    try {
        res.status(200).send(await createGroupRoom(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.room.create, async (req, res) => {
    try {
        res.status(200).send(await createRoom(req));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.room.modify, async (req, res) => {
    try {
        await modifyRoom(req);
        res.status(200).send({ message: `success_modify` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

router.post(routes.room.delete, async (req, res) => {
    try {
        await deleteRoom(req);
        res.status(200).send({ message: `success_delete` });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
