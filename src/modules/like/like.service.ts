import Like from './like.model';

const toggleLike = async (postId: string, userId: string) => {
  const existing = await Like.findOne({ postId, userId });

  if (existing) {
    await existing.deleteOne(); 
    return { liked: false };
  } else {
    await Like.create({ postId, userId });
    return { liked: true };
  }
};

const getLikesForPost = async (postId: string) => {
  return await Like.find({ postId }).populate('userId', 'name email');
};

const getPostsLikedByUser = async (userId: string) => {
  return await Like.find({ userId }).populate('postId');
};

export const LikeService = {
  toggleLike,
  getLikesForPost,
  getPostsLikedByUser,
};
