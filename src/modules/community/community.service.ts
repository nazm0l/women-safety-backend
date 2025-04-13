import Post from "./community.model";
import { IPost } from "./community.interface";
import { Types } from "mongoose";

const createPost = async (payload: Partial<IPost>) => {
  const newPost = new Post(payload);
  return await newPost.save();
};

const getAllPosts = async () => {
  return await Post.find().populate("createdBy", "name email").sort({ createdAt: -1 });
};

const getPostById = async (id: string) => {
  return await Post.findById(id).populate("createdBy", "name email");
};

const updatePost = async (id: string, payload: { title?: string; content?: string }) => {
  return await Post.findByIdAndUpdate(id, payload, { new: true });
};

// const updatePost = async (id: string, payload: Partial<IPost>) => {
//   return await Post.findByIdAndUpdate(id, payload, { new: true });
// };

// const addComment = async (postId: string, text: string, userId: Types.ObjectId) => {
//   const post = await Post.findById(postId);
//   if (!post) throw new Error("Post not found");

//   post.comments.push({ text, commentedBy: userId });
//   return await post.save();
// };

// const getComments = async (postId: string) => {
//   const post = await Post.findById(postId).populate("comments.commentedBy", "name email");
//   return post?.comments;
// };

// const getSingleComment = async (postId: string, commentId: string) => {
//   const post = await Post.findById(postId).populate("comments.commentedBy", "name email");
//   return post?.comments.id(commentId);
// };


// const toggleLike = async (postId: string, userId: Types.ObjectId) => {
//     const post = await Post.findById(postId);
//     if (!post) throw new Error("Post not found");
  
//     const alreadyLiked = post.likedBy.includes(userId);
//     if (alreadyLiked) {
//       // Unlike
//       post.likedBy = post.likedBy.filter((id) => id.toString() !== userId.toString());
//     } else {
//       // Like
//       post.likedBy.push(userId);
//     }
  
//     return await post.save();
//   };
  

export const CommunityService = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  // updatePost,
  // addComment,
  // getComments,
  // getSingleComment,
  // toggleLike
};
