import { Request, Response } from "express";
import { CommunityService } from "./community.service";
import catchAsync from "../../utils/catchAsync";

export const createPost = async (req: Request, res: Response) => {
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
};


export const getAllPosts = async (_req: Request, res: Response) => {
  const posts = await CommunityService.getAllPosts();
  res.status(200).json(posts);
};

export const getPostById = async (req: Request, res: Response) => {
  const post = await CommunityService.getPostById(req.params.id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json({
    success: true,
    message: "Post fetched successfully",
    data: post,
  });
};

// export const updatePost = async (req: Request, res: Response) => {
//   const updated = await CommunityService.updatePost(req.params.id, req.body);
//   res.status(200).json(updated);
// };

export const updatePost = catchAsync(async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;

  const updatedPost = await CommunityService.updatePost(postId, { title, content });

  res.status(200).json({
    success: true,
    message: "Post updated successfully",
    data: updatedPost,
  });
});

// export const addComment = async (req: Request, res: Response) => {
//   const { text, userId } = req.body;

//   const comment = await CommunityService.addComment(
//     req.params.id,
//     text,
//     userId
//   );

//   res.status(200).json({
//     success: true,
//     message: "Comment added!",
//     data: comment,
//   });
// };


// export const getComments = async (req: Request, res: Response) => {
//   const comments = await CommunityService.getComments(req.params.id);
//   res.status(200).json(comments);
// };

// export const getSingleComment = async (req: Request, res: Response) => {
//   const comment = await CommunityService.getSingleComment(req.params.id, req.params.id);
//   res.status(200).json(comment);
// };

// export const toggleLike = async (req: Request, res: Response) => {
//   const { userId } = req.body;

//   const result = await CommunityService.toggleLike(req.params.id, userId);

//   res.status(200).json({
//     message: "Like status updated",
//     likedBy: result.likedBy,
//     totalLikes: result.likedBy.length,
//   });
// };


