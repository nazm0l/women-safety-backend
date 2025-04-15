import { Request, Response } from 'express';
import { LikeService } from './like.service';

 const toggleLike = async (req: Request, res: Response) => {
  const { userId, postId } = req.body;

  const result = await LikeService.toggleLike(postId, userId);

  res.status(200).json({
    message: result.liked ? 'Post liked' : 'Post unliked',
    liked: result.liked,
  });
};


export const LikeController = {
    toggleLike,
}
