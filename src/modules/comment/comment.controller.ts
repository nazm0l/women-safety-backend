import { Request, Response } from "express";
import { CommentService } from "./comment.service";

export const addComment = async (req: Request, res: Response) => {
  const { text, userId } = req.body;
  const postId = req.params.id;

  const comment = await CommentService.addComment(postId, {
    text,
    commentedBy: userId,
  });

  res.status(200).json({
    success: true,
    message: "Comment added successfully!",
    data: comment,
  });
};

export const getComments = async (req: Request, res: Response) => {
  const comments = await CommentService.getComments(req.params.id);
  res.status(200).json({
    success: true,
    message: "All comments fetched",
    data: comments,
  });
};

export const getSingleComment = async (req: Request, res: Response) => {
  const comment = await CommentService.getSingleComment(req.params.id, req.params.commentId);
  res.status(200).json({
    success: true,
    message: "Single comment fetched",
    data: comment,
  });
};
