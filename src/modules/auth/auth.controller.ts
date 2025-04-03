// auth.controller.ts
import { Request, Response } from "express";
import { registerUser, loginUser } from "./auth.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse, { sendResponseLogin } from "../../utils/sendResponse";

export const register = catchAsync(async (req: Request, res: Response) => {
    const { name, email, password, emergencyContact, bloodGroup } = req.body;
  
    const user = await registerUser({ name, email, password, emergencyContact, bloodGroup, isDeleted: false });
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'User registered successfully',
      data: user,
    });
  });
  
  export const login = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    const { user, token } = await loginUser(email, password);
    sendResponseLogin(res, {
      statusCode: 200,
      success: true,
      message: 'Login successful',
      token,
      data: user,
    });
  });