// auth.routes.ts
import express from "express";
import multer from "multer";
import { register, login } from "./auth.controller";

const router = express.Router();
const upload = multer({ dest: "src/uploads/" });

router.post("/register", upload.single("image"), register);
router.post("/login", login);

export const Authorization = router;

// this file is written
