import express from "express";
import * as CommentController from "./comment.controller";

const router = express.Router();

router.post("/post/:id/comment", CommentController.addComment);
router.get("/post/:id/comments", CommentController.getComments);
router.get("/post/:id/comment/:commentId", CommentController.getSingleComment);

export const CommentRoutes = router;
