import { Request, Response } from "express";
import { CommunityService } from "./community.service";
import catchAsync from "../../utils/catchAsync";

export const createPost = catchAsync(async (req: Request, res: Response) => {
  const { title, content, userId } = req.body;

  const post = await CommunityService.createPost({
    title,
    content,
    createdBy: userId,
  });

  res.status(201).json({
    success: true,
    message: "Post created successfully!",
    data: post,
  });
});

export const getAllPosts = catchAsync(async (_req: Request, res: Response) => {
  const posts = await CommunityService.getAllPosts();
  res.status(200).json(posts);
});

//Get post by user ID
export const getPostsByUserId = catchAsync(
  async (req: Request, res: Response): Promise<any> => {
    const userId = req.params.userId;

    const posts = await CommunityService.getPostsByUserId(userId);
    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "No posts found for this user" });
    }

    res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      data: posts,
    });
  }
);

export const getPostById = catchAsync(
  async (req: Request, res: Response): Promise<any> => {
    const post = await CommunityService.getPostById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({
      success: true,
      message: "Post fetched successfully",
      data: post,
    });
  }
);

export const updatePost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;

  const updatedPost = await CommunityService.updatePost(postId, {
    title,
    content,
  });

  res.status(200).json({
    success: true,
    message: "Post updated successfully",
    data: updatedPost,
  });
});
