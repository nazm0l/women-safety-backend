import express from "express";
import { TrainingController } from "./training.controller";
// import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/add", TrainingController.addTraining);
// auth,
router.get("/", TrainingController.getTrainings);
router.get("/:id", TrainingController.getTrainingById);
router.put("/:id", TrainingController.updateTraining);
// auth,
router.delete("/:id", TrainingController.deleteTraining);
// auth
export const TrainingRoutes = router;
