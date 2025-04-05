import { Types } from "mongoose";

export type TTraining = {
  _id: string;
  title: string;
  videoURL: string;
  createdBy: Types.ObjectId;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};
