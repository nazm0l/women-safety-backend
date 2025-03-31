import mongoose, { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcrypt';
import config from "../../config";

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  {
    timestamps: true,
  }
);

// Password hashing before saving
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Static method to check if the email already exists
UserSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await this.findOne({ email }); // 'this' refers to the User model
};

// Static method to compare plain password with hashed password
UserSchema.statics.isPasswordMatched = async function (plainPassword: string, hashedPassword: string) {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

const User = model("User", UserSchema);

export default User;
