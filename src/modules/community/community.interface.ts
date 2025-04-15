import { Document, Types } from "mongoose";

export interface IComment {
  _id?: Types.ObjectId;
  text: string;
  commentedBy: Types.ObjectId;
  createdAt?: Date;
}


export interface IPost extends Document {
    title: string;
    content: string;
    createdBy: Types.ObjectId;
    comments: IComment[];
    // likedBy: Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
  }
  