import mongoose, { Model, Schema } from "mongoose";
import { TReportChildMarriage } from "./reportcm.interface";

const reportChildMarriageSchema: Schema<TReportChildMarriage> = new Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    evidence: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["pending", "inProgress", "resolved"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ReportChildMarriage: Model<TReportChildMarriage> =
  mongoose.model<TReportChildMarriage>(
    "ReportChildMarriage",
    reportChildMarriageSchema
  );

export default ReportChildMarriage;
