// user.model.ts
import mongoose, { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  emergencyContact?: string;
  bloodGroup?: string;
  comparePassword(candidatePassword: string): Promise<boolean>; // Add this
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    emergencyContact: { type: String },
    bloodGroup: { type: String },
  },
  {
    timestamps: true,
  }
);

// ✅ Pre-save password hashing
UserSchema.pre<IUser>('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// ✅ Instance method to compare password
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = model<IUser>('User', UserSchema);

export default User;
