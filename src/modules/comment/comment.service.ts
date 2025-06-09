import Post from "../community/community.model";
import { IComment } from "./comment.interface";

const addComment = async (postId: string, comment: IComment) => {
  const post = await Post.findById(postId);
  if (!post) throw new Error("Post not found");

  post.comments.push(comment);
  return await post.save();
};

const getComments = async (postId: string) => {
  const post = await Post.findById(postId).populate(
    "comments.commentedBy",
    "name email image"
  );
  return post?.comments;
};

const getSingleComment = async (postId: string, commentId: string) => {
  const post = await Post.findById(postId).populate(
    "comments.commentedBy",
    "name email"
  );
  const comment = post?.comments.find((c) => c._id?.toString() === commentId);
  return comment;
};

export const CommentService = {
  addComment,
  getComments,
  getSingleComment,
};
