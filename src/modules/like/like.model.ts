import { Schema, model } from 'mongoose';

const LikeSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

LikeSchema.index({ postId: 1, userId: 1 }, { unique: true });

const Like = model('Like', LikeSchema);
export default Like;
