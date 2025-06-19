import express from "express";
import * as CommunityController from "./community.controller";
import { LikeController } from "../like/like.controller";

const router = express.Router();

router.post("/create-post", CommunityController.createPost);
router.get("/posts", CommunityController.getAllPosts);
router.get("/posts/:id", CommunityController.getPostsByUserId);
router.get("/post/:id", CommunityController.getPostById);
router.put("/post/:id", CommunityController.updatePost);
router.delete("/post/:id", CommunityController.deletePost);
router.post("/post/:id/toggle-like", LikeController.toggleLike);

export const CommunityRoutes = router;
