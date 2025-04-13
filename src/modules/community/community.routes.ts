import express from "express";
import * as CommunityController from "./community.controller";

const router = express.Router();

router.post("/create-post", CommunityController.createPost);
router.get("/posts", CommunityController.getAllPosts);
router.get("/post/:id", CommunityController.getPostById);
router.put("/post/:id", CommunityController.updatePost);
// router.post("/post/:id/comment", CommunityController.addComment);
// router.get("/post/:id/comments", CommunityController.getComments);
// router.get("/post/:id/comment/:commentId", CommunityController.getSingleComment);


// router.post("/post/:id/like", CommunityController.toggleLike);
export const CommunityRoutes = router;
