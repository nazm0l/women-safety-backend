import { Types } from "mongoose";

export type TLocation = {
  addressLine: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  geo: {
    lat: number;
    lng: number;
  };
};

export type THelpline = {
  _id: string;
  title: string;
  description: string;
  location: TLocation;
  createdBy: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};
