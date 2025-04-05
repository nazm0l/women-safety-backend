import { Types } from "mongoose";

export type TReportChildMarriageStatus = "pending" | "inProgress" | "resolved";

export type TReportChildMarriage = {
  _id: string;
  description: string;
  address: string;
  evidence: string; // URL or file path
  status: TReportChildMarriageStatus;
  createdBy: Types.ObjectId;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};
