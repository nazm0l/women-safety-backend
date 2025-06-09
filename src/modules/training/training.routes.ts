import express from "express";
import { TrainingController } from "./training.controller";

const router = express.Router();

router.post("/add", TrainingController.addTraining);
router.get("/", TrainingController.getTrainings);
router.get("/:id", TrainingController.getTrainingById);
router.put("/:id", TrainingController.updateTraining);
router.delete("/:id", TrainingController.deleteTraining);
export const TrainingRoutes = router;
