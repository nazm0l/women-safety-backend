import express from "express";
import { ReportChildMarriageController } from "./reportcm.controller";
// import auth from "../../middlewares/auth";

const router = express.Router();

router.post("/add", ReportChildMarriageController.addReport);
// auth,
router.get("/", ReportChildMarriageController.getReports);
router.get("/:id", ReportChildMarriageController.getReportById);
router.put("/:id", ReportChildMarriageController.updateReportStatus);
// auth,
router.delete("/:id", ReportChildMarriageController.deleteReport);
// auth
export const ReportChildMarriageRoutes = router;
