import express from "express";
import * as CommunityController from "./community.controller";

const router = express.Router();

router.post("/create-post", CommunityController.createPost);
router.get("/posts", CommunityController.getAllPosts);
router.get("/post/:id", CommunityController.getPostById);
router.put("/post/:id", CommunityController.updatePost);

export const CommunityRoutes = router;
