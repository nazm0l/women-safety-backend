// auth.controller.ts
import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import { registerUser, loginUser } from "./auth.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse, { sendResponseLogin } from "../../utils/sendResponse";
import verifyFemale from "../../utils/verifyFemale";
import config from "../../config";

// Configure Cloudinary
cloudinary.config({
  cloud_name: config.CLOUDINARY_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
});

export const register = catchAsync(async (req: Request, res: Response) => {
  const { name, email, password, emergencyContact, bloodGroup } = req.body;

  const imageBuffer = req.file?.buffer;

  let isWoman = false;
  if (imageBuffer) {
    isWoman = await verifyFemale(imageBuffer);
  }

  if (!isWoman) {
    return sendResponse(res, {
      statusCode: 400,
      success: false,
      message: "You are not eligible to register",
      data: null,
    });
  }

  // Upload image to Cloudinary and get URL
  let profileImageUrl = "";
  try {
    // Using the async Cloudinary upload
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "image",
          folder: "women_profile_images",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      // Pipe the image buffer to Cloudinary upload stream
      uploadStream.end(imageBuffer);
    });

    // Now, we get the URL from the result
    profileImageUrl = (uploadResult as any).secure_url;
  } catch (err: any) {
    console.error("Error uploading image to Cloudinary:", err);
    return sendResponse(res, {
      statusCode: 500,
      success: false,
      message: "Error uploading image to Cloudinary.",
      data: null,
    });
  }

  const user = await registerUser({
    name,
    email,
    password,
    emergencyContact,
    bloodGroup,
    image: profileImageUrl,
    isDeleted: false,
  });
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User registered successfully",
    data: user,
  });
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { user, token } = await loginUser(email, password);
  sendResponseLogin(res, {
    statusCode: 200,
    success: true,
    message: "Login successful",
    token,
    data: user,
  });
});
