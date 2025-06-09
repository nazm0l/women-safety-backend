import mongoose, { Schema } from "mongoose";
import { THelpline } from "./helpline.interface";

type HelplineDocument = THelpline & Document;

const HelplineSchema: Schema<HelplineDocument> = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    category: {
      type: String,
      enum: ["Police", "Hospital", "NGO", "Other"],
      required: true,
    },
    location: {
      addressLine: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, default: "Bangladesh" },
      pincode: { type: String, required: true },
      geo: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
      },
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const HelplineModel = mongoose.model<HelplineDocument>(
  "Helpline",
  HelplineSchema
);

export default HelplineModel;
