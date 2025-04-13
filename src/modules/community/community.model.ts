import { Schema, model } from "mongoose";
import { IPost } from "./community.interface";

const commentSchema = new Schema(
  {
    text: { type: String, required: true },
    commentedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const postSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    comments: [commentSchema],
    // likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Post = model<IPost>("Post", postSchema);

export default Post;
