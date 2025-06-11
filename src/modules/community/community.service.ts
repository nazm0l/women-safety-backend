import Post from "./community.model";
import { IPost } from "./community.interface";
import { Types } from "mongoose";

const createPost = async (payload: Partial<IPost>) => {
  const newPost = new Post(payload);
  return await newPost.save();
};

const getAllPosts = async () => {
  return await Post.find()
    .populate("createdBy", "name email image")
    .sort({ createdAt: -1 });
};

// Get posts by user ID
const getPostsByUserId = async (userId: string) => {
  return await Post.find({ createdBy: new Types.ObjectId(userId) })
    .populate("createdBy", "name email image")
    .sort({ createdAt: -1 });
};

const getPostById = async (id: string) => {
  return await Post.findById(id).populate("createdBy", "name email");
};

const updatePost = async (
  id: string,
  payload: { title?: string; content?: string }
) => {
  return await Post.findByIdAndUpdate(id, payload, { new: true });
};

const deletePost = async (id: string) => {
  return await Post.findByIdAndDelete(id);
};

export const CommunityService = {
  createPost,
  getAllPosts,
  getPostsByUserId,
  getPostById,
  updatePost,
  deletePost,
};
