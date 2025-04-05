import mongoose, { Schema } from "mongoose";
import { TTraining } from "./training.interface";

const TrainingSchema: Schema<TTraining> = new Schema(
  {
    title: { type: String, required: true },
    videoURL: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const TrainingModel = mongoose.model<TTraining>("Training", TrainingSchema);

export default TrainingModel;
