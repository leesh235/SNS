import express from "express";
const router = express.Router();

//해당 게시글
router.get("/:postId", async (req, res) => {});

//게시글 작성
router.post("/write", async (req, res) => {});

//게시글 수정
router.patch("/modify", async (req, res) => {});

//게시글 삭제
router.delete("/delete", async (req, res) => {});

//좋아요 버튼
router.post("/like", async (req, res) => {});

export default router;
