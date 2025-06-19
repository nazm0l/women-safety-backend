import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { ReportChildMarriageService } from "./reportcm.service";

// Create a new child marriage report
const addReport = catchAsync(async (req, res) => {
  const { description, address, evidence, createdBy, status } = req.body;

  const report = await ReportChildMarriageService.addReport(
    description,
    address,
    evidence,
    createdBy,
    status
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Report submitted successfully",
    data: report,
  });
});

// Get all child marriage reports
const getReports = catchAsync(async (req, res) => {
  const reports = await ReportChildMarriageService.getAllReports();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reports retrieved successfully",
    data: reports,
  });
});

// Get a specific report by ID
const getReportById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const report = await ReportChildMarriageService.getReportById(id);

  if (!report) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Report not found",
      data: null,
    });
    return;
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Report retrieved successfully",
    data: report,
  });
});

// Update a report's status
const updateReportStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const updatedReport = await ReportChildMarriageService.updateReportStatus(
    id,
    status
  );

  if (!updatedReport) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Report not found or could not be updated",
      data: null,
    });
    return;
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Report status updated successfully",
    data: updatedReport,
  });
});

// Soft delete a report
const deleteReport = catchAsync(async (req, res) => {
  const { id } = req.params;

  const deletedReport = await ReportChildMarriageService.deleteReport(id);

  if (!deletedReport) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Report not found or already deleted",
      data: null,
    });
    return;
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Report deleted successfully",
    data: deletedReport,
  });
});

export const ReportChildMarriageController = {
  addReport,
  getReports,
  getReportById,
  updateReportStatus,
  deleteReport,
};
