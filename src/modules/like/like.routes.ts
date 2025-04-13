import express from 'express';
import { LikeController } from './like.controller';


const router = express.Router();

router.post('/like', LikeController.toggleLike);

export const LikeRoutes = router;
