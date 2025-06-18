// auth.routes.ts
import express from "express";
import multer from "multer";
import {
  register,
  login,
  updateUser,
  getAllUsers,
  getUserById,
  forgotPassword,
} from "./auth.controller";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get("/users", getAllUsers);
router.post("/register", upload.single("image"), register);
router.post("/login", login);
router.put("/forgot-password", forgotPassword);
router.put("/update", updateUser);
router.get("user/:id", getUserById);

export const Authorization = router;
