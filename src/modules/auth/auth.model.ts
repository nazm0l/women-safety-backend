// auth.model.ts
import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUserDocument extends Document {
  name: string;
  email: string;
  password: string;
  emergencyContact: string;
  bloodGroup: string;
  isDeleted: boolean;
  comparePassword: (password: string) => Promise<boolean>;
}

const userSchema: Schema<IUserDocument> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Method to compare password
userSchema.methods.comparePassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

// Pre-save hook to hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model<IUserDocument>('User', userSchema);

export default User;
