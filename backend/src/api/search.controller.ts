import express from "express";
import { find } from "../services/search.service";
import { fail, success, exist } from "../config/message";
import { routes } from "../config/route";

const router = express.Router();

//모두 검색
router.get(routes.search.all, async (req, res) => {
    try {
        const {
            query: { search },
        } = req;
        res.status(200).send(await find(search, "all"));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//게시글 검샘
router.get(routes.search.post, async (req, res) => {
    try {
        const {
            query: { search },
        } = req;
        res.status(200).send(await find(search, "post"));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//사람 검색
router.get(routes.search.people, async (req, res) => {
    try {
        const {
            query: { search },
        } = req;
        res.status(200).send(await find(search, "people"));
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

//친구 검색
router.get(routes.search.friend, async (req, res) => {
    try {
        const { query } = req;
        console.log(query);
        res.status(200).send({ message: "search.friend" });
    } catch (error) {
        res.status(500).send({ message: `${error}` });
    }
});

export default router;
