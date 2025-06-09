// auth.service.ts
import User from "./auth.model";
import jwt from "jsonwebtoken";
import { IUser } from "./auth.interface";

const JWT_SECRET = process.env.JWT_SECRET || "secret_key"; // Ensure this is set in your environment variables

export const registerUser = async (userData: IUser) => {
  const { name, email, password, emergencyContact, bloodGroup, image } =
    userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = new User({
    name,
    email,
    password,
    emergencyContact,
    image,
    bloodGroup,
    isDeleted: false, // Default is false
  });

  await user.save();
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

  return { user, token };
};

export const updateUserDB = async (
  name: string,
  emergencyContact: string,
  userId: string
) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("User not found");
  }

  user.name = name || user.name;
  user.emergencyContact = emergencyContact || user.emergencyContact;

  await user.save();
  return user;
};
