import express from "express";
import { HelplineController } from "./helpline.controller";
// import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/add",  HelplineController.addHelpline);
// auth,
router.get("/", HelplineController.getHelplines);
router.get("/:id", HelplineController.getHelplineById);
router.put("/:id",  HelplineController.updateHelpline);
// auth,
router.delete("/:id",  HelplineController.deleteHelpline);
// auth 
export const HelplineRoutes = router;
