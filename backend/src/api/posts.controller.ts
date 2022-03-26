import express from "express";
const router = express.Router();

//전체 리스트
router.get("/", async (req, res) => {});

//내 게시글 리스트
router.get("/:userId", async (req, res) => {});

//좋아요 리스트
router.get("/like", async (req, res) => {});

//즐겨찾기 리스트
router.get("/bookmark", async (req, res) => {});

//친구 게시글 리스트
router.get("/friends", async (req, res) => {});

export default router;
