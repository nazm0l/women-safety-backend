import mongoose from "mongoose";

export interface TUser {
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    emergencyContact: string;
    bloodGroup: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IUserModel extends mongoose.Model<TUser> {
    isUserExistsByEmail(email: string): Promise<TUser | null>;
    isPasswordMatched(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
  }
  