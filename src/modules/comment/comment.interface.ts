import { Types } from "mongoose";

export interface IComment {
  _id?: Types.ObjectId;
  text: string;
  commentedBy: Types.ObjectId;
  createdAt?: Date;
}
