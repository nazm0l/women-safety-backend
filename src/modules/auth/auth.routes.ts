// auth.routes.ts
import express from "express";
import multer from "multer";
import { register, login, updateUser } from "./auth.controller";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/register", upload.single("image"), register);
router.post("/login", login);
router.put("/update", updateUser);

export const Authorization = router;
